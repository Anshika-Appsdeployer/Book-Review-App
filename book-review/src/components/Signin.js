import React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <>
           <Header />
            <div className="color-overlay d-flex">
                <Form className="container rounded p-4 p-sm-3">
                    <strong>Sign In</strong>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" autoComplete="current-password" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Text className="text-muted">
                            Don't have an Account?
                        </Form.Text>
                        <div className="my-3">
                            <Button variant="success" type="submit">
                                <Link className="text-decoration-none text-white" to="/signup">Sign Up</Link>
                            </Button>
                        </div>
                    </Form.Group>

                    <Button variant="success" type="submit">
                        <Link className="text-decoration-none text-white" to={"/home"}>Sign In</Link>
                    </Button>
                </Form>
            </div> 
        </>
    )
}

export default Signin