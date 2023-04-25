import Link from 'next/link';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarMenu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>My Next App</Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} href="/">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} href="/posts">
                    Posts
                </Nav.Link>
                <Nav.Link as={Link} href="/jokes/random">
                    Jokes
                </Nav.Link>

                <Nav.Link as={Link} href="/books">
                    Books
                </Nav.Link>
                <Nav.Link as={Link} href="/about">
                    About
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavbarMenu;
