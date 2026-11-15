import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnv(path.join(root, ".env"));

const apiKey = process.env.STABILITY_API_KEY;
if (!apiKey) {
  console.error("Missing STABILITY_API_KEY. Set it in .env (see .env.example).");
  process.exit(1);
}

const styleLock =
  "Digital 2D painting, Studio Fortiche style, Arcane TV, Brightcall Bright-punk Fantasy. " +
  "Match the style of the Brightcall harvester plate: thick confident brush strokes, sharp graphic silhouettes, " +
  "high-contrast cinematic rim light, cyan magenta gold neon against Bone Ash Greige and bruised plum shadows. " +
  "Stylized realism, painterly blocks, no photorealism, no 3D render, no soft generic concept art, no anime. ";

const defaultPrompt =
  styleLock +
  "A towering Oru woman with black stone-glimmer skin and short textured natural hair, " +
  "wearing a tattered off-white and blue Kardia trench coat over Brilliance pearl braces with a Bright cell cutout. " +
  "She holds a vibrating Resonance Glaive edged with magenta Chroma where a Seam almost opens. " +
  "Low angle heroic perspective, gritty brutalist background inside The Bright, no factory floor.";

const negativePrompt =
  "photorealistic, 3d render, unreal engine, soft airbrush concept art, anime, cartoon chibi, " +
  "generic fantasy oil painting, muddy grimdark, heavy armor, metallic knight plates, " +
  "blood, gore, ugly, text, watermark, logo, UI, soft fairy magic";

function parseArgs(argv) {
  let out = path.join(root, "brightcall-art.png");
  let aspect = "16:9";
  let seed = null;
  let negative = negativePrompt;
  const promptParts = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--out" && argv[i + 1]) {
      out = path.resolve(root, argv[++i]);
      continue;
    }
    if (arg === "--aspect" && argv[i + 1]) {
      aspect = argv[++i];
      continue;
    }
    if (arg === "--seed" && argv[i + 1]) {
      seed = Number(argv[++i]);
      continue;
    }
    if (arg === "--negative" && argv[i + 1]) {
      negative = `${negativePrompt}, ${argv[++i]}`;
      continue;
    }
    promptParts.push(arg);
  }
  return {
    out,
    aspect,
    seed,
    negative,
    prompt: promptParts.join(" ").trim() || defaultPrompt,
  };
}

const { out: outFile, aspect, seed, negative, prompt: promptText } = parseArgs(
  process.argv.slice(2),
);

async function generateBrightcallArt(prompt) {
  const url = "https://api.stability.ai/v2beta/stable-image/generate/sd3";
  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("mode", "text-to-image");
  formData.append("model", "sd3-large");
  formData.append("aspect_ratio", aspect);
  formData.append("negative_prompt", negative);
  if (Number.isFinite(seed)) {
    formData.append("seed", String(Math.trunc(seed)));
  }

  const seedLabel = Number.isFinite(seed) ? ` seed=${Math.trunc(seed)}` : "";
  console.log(`Generating → ${path.relative(root, outFile)}${seedLabel}`);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "image/*",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${await response.text()}`);
  }

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, Buffer.from(await response.arrayBuffer()));
  console.log(`Saved ${outFile}`);
}

generateBrightcallArt(promptText).catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
