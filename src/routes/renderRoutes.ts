import { useRoutes } from 'react-router-dom'

export const Router = ({
  routes,
  location,
}: {
  routes: any
  location: Partial<Location>
}) => useRoutes(routes, location)
