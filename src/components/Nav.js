import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export function Nav() {
  const [isHidden, setIsHidden] = useState(true)
  const handleDropdown = () => {
    const subMenu = document.querySelector('.dropdown-menu')
    if (isHidden) {
      subMenu.style.display = 'block'
      setIsHidden(false)
    } else {
      subMenu.style.display = 'none'
      setIsHidden(true)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="mb-2 navbar-nav me-auto mb-lg-0">
            <li key='1' className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li key='2' className="nav-item">
              <a className="nav-link" href="/Home">
                Courses
              </a>
            </li>
            <li key='3' className="nav-item dropdown">
              <button className="btn dropdown-toggle" onClick={handleDropdown}>
                Test
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/Test">
                  N5
                </a>
                <a className="dropdown-item" href="/Test">
                  N4
                </a>
                <a className="dropdown-item" href="/Test">
                  N3
                </a>
                <a className="dropdown-item" href="/Test">
                  N2
                </a>
                <a className="dropdown-item" href="/Test">
                  N1
                </a>
              </div>
            </li>
          </ul>
          <div className="nav-item">
            <a className="nav-link" href="/Home">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}