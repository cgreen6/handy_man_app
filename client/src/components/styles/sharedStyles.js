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
        <Navbar.Brand>Handy_man</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <MainNav to='/'>
            <Nav.Link>Home</Nav.Link>
          </MainNav>
          <MainNav to='/about'>
            <Nav.Link>About</Nav.Link>
          </MainNav>
          <MainNav to='/workers'>
            <Nav.Link>Workers</Nav.Link>
          </MainNav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MainNavbar;