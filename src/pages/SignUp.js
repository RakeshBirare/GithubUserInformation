import React, { useState, useContext } from "react";
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Row,
    Col,
    Input,
    Card, CardBody, CardFooter, CardHeader
} from "reactstrap";

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { UserContext } from "../Context/UserContext"
import { Redirect } from "react-router";
import { toast } from "react-toastify";
// import { useState } from "react/cjs/react.development";

const SignUp = () => {

    const context = useContext(UserContext)
    const [email, setEmail] = useState("")
    const[password,setPassword] = useState("")

    const handeleSignUp = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res)
            context.setUser({email: res.user.email, uid: res.user.uid})
        })
        .catch(error => {
            console.log(error)
            toast(error.message, {
                type :"error"
            })
        })
    }

    const handelSubmit = e => {
        e.preventDefault();
        handeleSignUp();
    }

    if (context.user?.uid) {
        return <Redirect to="/" />
    }

    return (
        <Container className='text-center'>
        <Row>
            <Col lg={6} className='offset-lg-3 mt-5'>
                <Card>
                    <Form onSubmit={handelSubmit}>
                        <CardHeader className=''>SignUp here</CardHeader>
                        <CardBody>
                            <FormGroup row>
                                <Label for='email' sm={3}>
                                    Email
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='provide your email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='password' sm={3}>
                                    Password
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='your password here'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Button type='submit' block color='primary'>
                                Sign Up
                            </Button>
                        </CardFooter>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default SignUp;