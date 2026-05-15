# Vite rolldown lazy import repro

This is a minimal reproduction for lazy named exports imported from route objects while Vite dev uses `experimental.bundledDev`.

The route shape is intentionally anonymized and uses placeholder pages:

```ts
const Page1 = lazy(() =>
  import('@pages/page1').then((module) => ({ default: module.Page1 })),
)
const Page1Tab1 = lazy(() =>
  import('@pages/page1').then((module) => ({ default: module.Page1Tab1 })),
)
```

The Vite config keeps the same aliases, CSS module settings, dev proxy shape, `experimental.bundledDev: true`, and `build.rolldownOptions.experimental.lazyBarrel: true`.

## Run

```sh
npm install
npm run dev
```

Open `/section`, `/section/page-1/tab-1`, `/section/page-2`, or `/section/page-3/item-1`.
