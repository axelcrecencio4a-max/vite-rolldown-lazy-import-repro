import { Link, Outlet } from 'react-router-dom'

type PageProps = {
  title: string
  links?: Array<{
    to: string
    label: string
  }>
}

export const Page = ({ title, links = [] }: PageProps) => (
  <section className="page">
    <h2>{title}</h2>
    {links.length > 0 ? (
      <nav className="tabs">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
    ) : null}
    <Outlet />
  </section>
)

export const Placeholder = ({ title }: { title: string }) => (
  <div className="placeholder">
    <strong>{title}</strong>
    <p>This placeholder exists only to reproduce lazy named exports through route objects.</p>
  </div>
)
