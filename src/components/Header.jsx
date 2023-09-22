import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


const Header = ({ photos, search, setSearch, input, setInput }) => {
    // console.log('포토',photos)
    // console.log(search)

    const navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();
        // if (input.length < 3) {
        //     alert('더 입력하세요...')
        //     return
        // }
        setSearch(input);
    };
    const onChange = e => setInput(e.target.value);

    return (
        <header className='header'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate('/')}>Pixabay</Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
                            <NavDropdown title="Tag" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={()=>navigate('/detail/cat')}>
                                    Cat
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex" onSubmit={onSubmit}>
                            <Form.Control
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                type="text" onChange={onChange}
                            />
                            <Button type="" variant="outline-success">Search</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header