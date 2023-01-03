import {Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
        <>

            <NavbarBs className="navbar">
                <div className="container">
                    <Nav className="page_btn">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'page page1_active' : 'page page1')}> <div className="align1"> Home </div></NavLink>
                        <NavLink to="/create" className={({ isActive }) => (isActive ? 'page page2_active' : 'page page2')}> <div className="align"> Create bookmark </div> </NavLink>
                        <NavLink to="/simple" className={({ isActive }) => (isActive ? 'page page3_active' : 'page page3')}> <div className="align"> Simple search </div> </NavLink>
                        <NavLink to="/advanced" className={({ isActive }) => (isActive ? 'page page4_active' : 'page page4')}> <div className="align"> Advanced search </div> </NavLink>
                    </Nav>
                </div>
            </NavbarBs>

        </>
    )
}