import React, { useEffect, useState } from 'react'
import ConsoleHeader from './elements/ConsoleHeader/ConsoleHeader'
import ConsoleSidebar from './elements/ConsoleSidebar/ConsoleSidebar'
import { Outlet } from 'react-router'

function ConsoleLayout() {
  const [firstRender, setFirstRender] = useState(false)
  
  useEffect(() => {
    // did mount or update mount
    if (firstRender == false) {
      renderClass()
      onLoadedHTML()
      detectScale()
    }

    return () => {
      // unmount
    }
  })

  const renderClass = () => {
    document.body.className = ''
    document.body.className = 'sidebar-mini control-sidebar-slide-open layout-fixed layout-navbar-fixed'
    setFirstRender(true)
  }

  const onLoadedHTML = () => {
    if (window.innerWidth < 992) {
      const isOpen = document.body.classList.value.includes('sidebar-open');
      const isCollapse = document.body.classList.value.includes('sidebar-collapse');
      if ((!isOpen && !isCollapse) || isOpen) {
        document.body.classList.remove('sidebar-open');
      }
      document.body.classList.add('sidebar-collapse');
    } else if (window.innerWidth >= 1024) {
      document.body.classList.remove('sidebar-open');
      document.body.classList.remove('sidebar-collapse');
    }
  };

  const detectScale = () => {
    window.onresize = function (event) {
      if (window.innerWidth < 992) {
        if (document.body.classList.value.includes('sidebar-open')) {
          document.body.classList.remove('sidebar-open');
        }
        document.body.classList.add('sidebar-collapse');
      } else if (window.innerWidth >= 1024) {
        document.body.classList.remove('sidebar-open');
        document.body.classList.remove('sidebar-collapse');
      }
    };
  };

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
      <ConsoleHeader />
      <ConsoleSidebar />
      <div className='content-wrapper'>
        <Outlet />
      </div>
      <div id="sidebar-overlay" onClick={toggleMenuSidebar} />
    </>
  )
}

export default ConsoleLayout
