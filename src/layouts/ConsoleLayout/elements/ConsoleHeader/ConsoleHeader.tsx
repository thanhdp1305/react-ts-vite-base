function ConsoleHeader(props: any) {

  const toggleMenuSidebar = (): void => {
    const isOpen = document.body.classList.value.includes('sidebar-open');
    const isCollapse = document.body.classList.value.includes('sidebar-collapse');
    if ((!isOpen && !isCollapse) || isOpen) {
      document.body.classList.remove('sidebar-open');
      document.body.classList.add('sidebar-collapse');
    } else {
      document.body.classList.remove('sidebar-collapse');
      document.body.classList.add('sidebar-open');
    }
  };

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
              onClick={toggleMenuSidebar}
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
        </ul>
      </nav>
    </>
  )
}

export default ConsoleHeader
