import { Navbar, Nav } from "react-bootstrap";

const NavbarBefore = () => {
	return (
		<>
			<Navbar
				bg="dark"
				variant="dark"
				expand="lg"
				sticky="top"
				className="px-3"
			>
				<Navbar.Brand className="marginName" href="/">
					<i className="">MAVSTREAM</i>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</Navbar>
		</>
	);
};

export default NavbarBefore;