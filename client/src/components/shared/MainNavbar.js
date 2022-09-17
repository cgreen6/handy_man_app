import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { MainNav } from '../../styles/sharedStyle';

const MainNavbar = () => (
  // <nav>
  //   <ul>
  //     <li>Todo List</li>
  //     <Link to='/'>
  //       <li>Home</li>
  //     </Link>
  //     <Link to='/about'>
  //       <li>About</li>
  //     </Link>
  //     <Link to='/lists'>
  //       <li>Lists</li>
  //     </Link>
  //   </ul>
  // </nav>
  <Navbar>
    <Container>
      <Link 
        to='/'
      >
        <Navbar.Brand>Services</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link>
            <MainNav to='/'>
              Home
            </MainNav>
          </Nav.Link>
          <Nav.Link>
            <MainNav to='/about'>
              About
            </MainNav>
          </Nav.Link>
          <Nav.Link>
            <MainNav to='/workers'>
              Workers
            </MainNav>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MainNavbar;