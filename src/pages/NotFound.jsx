import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section notfound-page">
      <p className="eyebrow">Page not found</p>
      <h2>Oops! We couldn't find that page.</h2>
      <p className="notfound-text">
        The link may be broken or the page may have moved. Head back to the home page
        to continue exploring our properties.
      </p>
      <Link className="button button-primary" to="/">
        Back to home
      </Link>
    </section>
  )
}
