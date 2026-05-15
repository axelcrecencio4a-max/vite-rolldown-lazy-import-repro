import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import { PATHS } from '@shared/constants'
import type { TRouteObjectWithMeta } from '@shared/types'
import { Widget1 } from '@widgets/widget1'
import { Widget2 } from '@widgets/widget2'

const Page1 = lazy(() => import('@pages/page1').then((module) => ({ default: module.Page1 })))
const Page1Tab1 = lazy(() =>
  import('@pages/page1').then((module) => ({ default: module.Page1Tab1 })),
)
const Page1Tab2 = lazy(() =>
  import('@pages/page1').then((module) => ({ default: module.Page1Tab2 })),
)
const Page1Tab3 = lazy(() =>
  import('@pages/page1').then((module) => ({ default: module.Page1Tab3 })),
)
const Page2 = lazy(() => import('@pages/page2').then((module) => ({ default: module.Page2 })))
const Page3 = lazy(() => import('@pages/page3').then((module) => ({ default: module.Page3 })))
const Page4 = lazy(() => import('@pages/page4').then((module) => ({ default: module.Page4 })))
const Page5 = lazy(() => import('@pages/page5').then((module) => ({ default: module.Page5 })))

export const PAGE_ROUTES: TRouteObjectWithMeta = {
  path: PATHS.section.root,
  handle: {
    label: 'Section',
  },
  children: [
    {
      index: true,
      element: <Navigate to={PATHS.section.page1} replace={true} />,
    },
    {
      path: PATHS.section.page1,
      handle: {
        label: 'Page 1',
      },
      element: <Page1 />,
      children: [
        {
          index: true,
          element: <Navigate to={PATHS.section.page1_tab1} replace={true} />,
        },
        {
          handle: {
            label: 'Tab 1',
          },
          path: PATHS.section.page1_tab1,
          element: <Page1Tab1 />,
        },
        {
          handle: {
            label: 'Tab 2',
          },
          path: PATHS.section.page1_tab2,
          element: <Page1Tab2 />,
        },
        {
          handle: {
            label: 'Tab 3',
          },
          path: PATHS.section.page1_tab3,
          element: <Page1Tab3 />,
        },
      ],
    },
    {
      path: PATHS.section.page2,
      handle: {
        label: 'Page 2',
      },
      element: <Page2 />,
    },
    {
      path: PATHS.section.page3,
      handle: {
        label: 'Page 3',
      },
      element: <Page3 />,
      children: [
        {
          index: true,
          element: <Navigate to={PATHS.section.page3_item1} replace={true} />,
        },
        {
          handle: {
            label: 'Item 1',
          },
          path: PATHS.section.page3_item1,
          element: <Widget1 />,
        },
        {
          handle: {
            label: 'Item 2',
          },
          path: PATHS.section.page3_item2,
          element: <Widget2 />,
        },
      ],
    },
    {
      path: PATHS.section.page4,
      handle: {
        label: 'Page 4',
      },
      element: <Page4 />,
    },
    {
      path: PATHS.section.page5,
      handle: {
        label: 'Page 5',
      },
      element: <Page5 />,
    },
  ],
}
