import * as React from "react"
import { Link } from 'gatsby'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const menuList = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/blog', name: 'blog' },
]

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="light" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand>
            Gatsby + React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                menuList.map(({ path, name }) =>
                  <Link to={path} key={`menu-${name}`} className="nav-link">{name}</Link>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header