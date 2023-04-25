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
                <Nav.Link as={Link} href="/about">
                    About
                </Nav.Link>

                {/* <Link href="/" passHref>
                    <Nav.Link as="a">Home</Nav.Link>
                </Link>
                <Link href="/posts" passHref>
                    <Nav.Link as="a">Posts</Nav.Link>
                </Link>
                <Link href="/about" passHref>
                    <Nav.Link as="a">About</Nav.Link>
                </Link> */}
            </Nav>
        </Navbar>
    );
};

export default NavbarMenu;
