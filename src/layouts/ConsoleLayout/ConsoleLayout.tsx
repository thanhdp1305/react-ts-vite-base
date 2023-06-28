import React from 'react'
import ConsoleHeader from './elements/ConsoleHeader/ConsoleHeader'
import ConsoleSidebar from './elements/ConsoleSidebar/ConsoleSidebar'

class ConsoleLayout extends React.Component<any, any> {
  constructor(props: any | Readonly<{}>) {
    super(props)
    // Don't do this!
  }

  componentWillMount() {
    //
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
          { this.props.children }
        </div>
      </>
    )
  }
}

export default ConsoleLayout
