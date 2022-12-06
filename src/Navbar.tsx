import {Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
        <>

            <NavbarBs className="navbar">
                <div className="container">
                    <Nav className="page_btn">
                        <NavLink to="/" className="page page1"> <div className="align1"> Home </div></NavLink>
                        <NavLink to="/create" className="page page2"> <div className="align"> Create bookmark </div> </NavLink>
                        <NavLink to="/simple" className="page page3"> <div className="align"> Simple search </div> </NavLink>
                        <NavLink to="/advanced" className="page page4"> <div className="align"> Advanced search </div> </NavLink>
                    </Nav>
                </div>
            </NavbarBs>

        </>
    )
}