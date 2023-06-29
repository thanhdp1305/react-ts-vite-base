import { Link } from 'react-router-dom'

function ConsoleSidebar() {
  const arr = [
    'Menu From code 1',
    'Menu From code 2'
  ]
  return (
    <aside className="main-sidebar sidebar-light-primary border-right">
      <a href="index3.html" className="brand-link text-center">
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
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
            {
              arr.map((value, index) => (
                <li className="nav-item" key={index}>
                  <Link to={'/'} className="nav-link">
                    <p>
                      {value}
                    </p>
                  </Link>
                </li>
              ))
            }
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                <p>
                  Parent Menu
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Sub menu 1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/inline.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Sub menu 1</p>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>
    </aside >
  )
}

export default ConsoleSidebar