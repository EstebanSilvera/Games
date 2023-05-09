import React from 'react'
import {Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import icon from "../img/icono.jpg"

const Menu = () => {
  return (
    <div>
        <nav style={{ background: "#212529" }} >
                <Navbar className='container' bg="dark" expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ margin: "5px", alignItems: "center" }} className="me-auto">
                            <img
                                style={{ borderRadius: "10px" }}
                                alt=""
                                src={icon}
                                width="120"
                                height="40"
                                className="d-inline-block align-top"
                            />
                            <h3 style={{ color: "white", padding: "0px 20px" }}>EstebanSilvera</h3>
                        </Nav>

                        <div align='center' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px" }}>

                            <Form.Control style={{ width: "100%", height: "30px" }} type="email" placeholder="Buscar producto 👀" />

                        </div>
                        <Navbar.Collapse style={{ marginRight: "20px" }} className="justify-content-end">
                            <Nav style={{ margin: "5px" }} >

                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
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