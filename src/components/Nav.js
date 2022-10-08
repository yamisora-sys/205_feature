import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { auth } from './Firebase'

export function Nav() {

//   const [name, setName] = useState('')

//   useEffect(() => {
//     async function fetchData() {
//       const name = await auth.currentUser.displayName  

//     }

//     fetchData()     
// }, []);

//     const user = auth.currentUser
//     if (user !== null){
//         const name = user.displayName
//         const email = user.email
//         const photoUrl = user.photoURL
//         const emailVerified = user.emailVerified
//         const uid = user.uid

//         setName(name)
//     }}

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
          <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/updateprofile">
                {/* {name} */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home">
                Courses
              </a>
            </li>
            <li className="nav-item dropdown">
              <button className="btn dropdown-toggle" onClick={handleDropdown}>
                Test
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/Home">
                  N5
                </a>
                <a className="dropdown-item" href="/Home">
                  N4
                </a>
                <a className="dropdown-item" href="/Home">
                  N3
                </a>
                <a className="dropdown-item" href="/Home">
                  N2
                </a>
                <a className="dropdown-item" href="/Home">
                  N1
                </a>
              </div>
            </li>
          </ul>
          <div className="nav-item">
            <a className="nav-link" href="/signout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
