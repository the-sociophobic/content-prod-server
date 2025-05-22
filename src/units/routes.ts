import Video from '../routes/Video'

import { RouteType } from '../types/routes.type'


const routes: RouteType[] = [
  {
    type: 'GET',
    path: '/test',
    fn: Video
  },
]


export default routes
