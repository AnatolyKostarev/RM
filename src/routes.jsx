import { Episodes } from './pages/Episodes/Episodes.jsx'
import { Locations } from './pages/Locations/Locations.jsx'
import { Characters } from './pages/Characters/Characters.jsx'
import { Error } from './pages/Error/Error.jsx'

export const routes = [
  { path: '/', element: <Characters /> },
  { path: '/locations', element: <Locations /> },
  { path: '/episodes', element: <Episodes /> },
  { path: '*', element: <Error /> }
]
