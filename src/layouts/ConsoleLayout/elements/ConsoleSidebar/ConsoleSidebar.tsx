import { Link } from 'react-router-dom'

function ConsoleSidebar() {
  return (
    <aside className="main-sidebar sidebar-light-primary border-right">
      <a href="index3.html" className="brand-link text-center">
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/404'} className="nav-link">
                <p>
                  404 Page
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default ConsoleSidebar