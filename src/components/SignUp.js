import React, { useState } from 'react';
import { Form, Button, Container, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
    const [email, setEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!email) errors.email = "Email is required";
        if (!createPassword) errors.createPassword = "Password is required";
        if (!confirmPassword) errors.confirmPassword = "Confirm Password is required";
        if (createPassword !== confirmPassword) errors.confirmPassword = "Passwords do not match";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            localStorage.setItem('user', JSON.stringify({ email, password: createPassword }));
            navigate('/my-responsibility');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container className='mt-4'>
            <h2 className='mb-5'>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><h6>Email address</h6></Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formCreatePassword">
                    <Form.Label><h6 className='mt-4'>Create Password</h6></Form.Label>
                    <InputGroup>
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="must be 8 characters"
                            value={createPassword}
                            onChange={(e) => setCreatePassword(e.target.value)}
                            isInvalid={!!errors.createPassword}
                        />
                        <Button variant="outline-secondary" onClick={toggleShowPassword}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </Button>
                        <Form.Control.Feedback type="invalid">
                            {errors.createPassword}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label><h6 className='mt-4'>Confirm Password</h6></Form.Label>
                    <InputGroup>
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="repeat password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            isInvalid={!!errors.confirmPassword}
                        />
                        <Button variant="outline-secondary" onClick={toggleShowPassword}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </Button>
                        <Form.Control.Feedback type="invalid">
                            {errors.confirmPassword}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <div className='text-center' style={{marginTop:"250px"}}>
                    <Button variant="primary" type="submit" className='mt-3' style={{width:"300px", padding:"10px"}}>
                        Sign Up
                    </Button>
                </div>
            </Form>
            <div className="mt-3 text-center">
                <Button variant="link" onClick={() => navigate('/login')}>
                    Already have an account? Log In
                </Button>
            </div>
        </Container>
    );
}

export default SignUp;
