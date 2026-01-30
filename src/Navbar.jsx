import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({cart}) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">FakeStore</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart"><button type="button" class="btn btn-primary position-relative">
  Cart
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button></Link>
              </li>
            </ul>
          </div>
        </nav>
    
    </>
  )
}

export default Navbar