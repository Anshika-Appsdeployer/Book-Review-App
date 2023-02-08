import { React, useState } from 'react';
import './Signup.css';
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';


const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        if(!values.name || !values.email || !values.password) {
            setErrorMessage("Please fill out all fields");
            return;
        }
        console.log(values);
        setErrorMessage("");
        
        createUserWithEmailAndPassword(auth, values.email, values.password).then
        (res => {
            console.log(res);

        }).catch(err => {console.log(err)});


    }

    return (
        <>
            <Header />
            <div className="d-flex">
                <Form className="container rounded p-4 p-sm-3">
                    <strong>Sign Up</strong>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" 
                        onChange={(e) => 
                        setValues((prev) => ({ ...prev, name: e.target.value}))
                        } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"
                        onChange={(e) => 
                            setValues((prev) => ({ ...prev, email: e.target.value}))
                            } />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" autoComplete="current-password"
                        onChange={(e) => 
                            setValues((prev) => ({ ...prev, password: e.target.value}))
                            } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Text className="text-muted">
                            Already have an Account?
                        </Form.Text>
                        <div className="my-3">
                            <Button variant="success" type="submit">
                                <Link className="text-decoration-none text-white" to="/signin">Sign In</Link>
                            </Button>
                        </div>
                    </Form.Group>

                    <div><b className="error">{errorMessage}</b></div>
                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        <Link className="text-decoration-none text-white" to={"/home"}>Sign Up</Link>
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Signup