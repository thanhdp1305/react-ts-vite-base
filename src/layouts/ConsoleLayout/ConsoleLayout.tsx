import React from 'react'
import ConsoleHeader from './elements/ConsoleHeader/ConsoleHeader'
import ConsoleSidebar from './elements/ConsoleSidebar/ConsoleSidebar'
import { Outlet } from 'react-router'

class ConsoleLayout extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.renderClass()
  }

  renderClass() {
    document.body.className = ''
    document.body.className = 'sidebar-mini control-sidebar-slide-open layout-fixed layout-navbar-fixed'
  }

  render() {
    return (
      <>
        <ConsoleHeader />
        <ConsoleSidebar />
        <div className='content-wrapper'>
          <Outlet />
        </div>
      </>
    )
  }
}

export default ConsoleLayout
