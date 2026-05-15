import type { RouteObject } from 'react-router-dom'

export type TRouteObjectWithMeta = RouteObject & {
  handle?: {
    label?: string
    roles?: string[]
    companyTypes?: string[]
  }
  children?: TRouteObjectWithMeta[]
}
