import React, { Component } from 'react';
import {Nav, NavItem, Navbar, NavbarBrand, NavLink} from 'reactstrap';

class AppNav extends Component {
    state = {  }

    render() { 
        return ( 
            <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/home/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/categories">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/expenses">Expenses</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            </div>
         );
    }
}
 
export default AppNav;