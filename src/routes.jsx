import { Episodes } from './pages/Episodes/Episodes.jsx'
import { Locations } from './pages/Locations/Locations.jsx'
import { Characters } from './pages/Characters/Characters.jsx'
import { Error } from './pages/Error/Error.jsx'
import { Character } from './pages/Character/Character.jsx'
import { Episode } from './pages/Episode/Episode.jsx'

export const routes = [
  { path: '/', element: <Characters /> },
  { path: '/character/:id', element: <Character /> },
  { path: '/locations', element: <Locations /> },
  { path: '/episodes', element: <Episodes /> },
  { path: '/episode/:id', element: <Episode /> },
  { path: '*', element: <Error /> }
]
