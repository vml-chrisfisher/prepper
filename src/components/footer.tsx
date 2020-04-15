import { Link } from 'gatsby'

export default () => (
  <div>
    <ul className="navigation">
      <li className="navigationItem">
        <Link to="/" > Home </Link>
      </li>
      <li className="navigationItem">
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </div>
)
