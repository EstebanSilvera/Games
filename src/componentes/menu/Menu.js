import React from 'react'
import {Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Menu = () => {
  return (
    <div>
        <nav style={{ background: "#212529" }} >
                <Navbar className='container' bg="dark" expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ margin: "5px", alignItems: "center" }} className="me-auto">
                            <h3 style={{ color: "white", padding: "0px 20px" }}>EstebanSilvera</h3>
                        </Nav>

                        <div align='center' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px" }}>

                            <Form.Control style={{ width: "100%", height: "30px" }} type="email" placeholder="Buscar producto 👀" />

                        </div>
                        <Navbar.Collapse style={{ marginRight: "20px" }} className="justify-content-end">
                            <Nav style={{ margin: "5px" }} >

                                <Nav.Link >Home</Nav.Link>
                                <Nav.Link >Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item >Action</NavDropdown.Item>
                                    <NavDropdown.Item >
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item >
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
    </div>
  )
}

export default Menu