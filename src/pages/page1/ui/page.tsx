import { Page } from '../../page'

export const Page1 = () => (
  <Page
    title="Page 1"
    links={[
      { to: 'tab-1', label: 'Tab 1' },
      { to: 'tab-2', label: 'Tab 2' },
      { to: 'tab-3', label: 'Tab 3' },
    ]}
  />
)
