import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Bright } from './pages/Bright'
import { Energies } from './pages/Energies'
import { FactionDetail } from './pages/FactionDetail'
import { Factions } from './pages/Factions'
import { Game } from './pages/Game'
import { Heroes } from './pages/Heroes'
import { Home } from './pages/Home'
import { Timeline } from './pages/Timeline'
import { World } from './pages/World'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="world" element={<World />} />
          <Route path="bright" element={<Bright />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="energies" element={<Energies />} />
          <Route path="factions" element={<Factions />} />
          <Route path="factions/:id" element={<FactionDetail />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
