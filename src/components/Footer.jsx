import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>Apna Ghar Jankari</h3>
          <p>Helping buyers and families find trusted homes in West Delhi.</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>8448844840</p>
          <p>Uttam Nagar · Dwarka · Delhi</p>
        </div>
      </div>
      <p className="footer-copy">© 2026 Apna Ghar Jankari. All rights reserved.</p>
    </footer>
  )
}
