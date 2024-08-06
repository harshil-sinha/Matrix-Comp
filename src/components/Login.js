import React, { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        navigate('/my-responsibility');
      } else {
        setError('Invalid email or password');
      }
    } else {
      setError('No user found');
    }
  };

  const handleSignUp = () => {
    navigate('/'); 
  };

  return (
    <Container className='mt-4'>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label><h6>Email</h6></Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label><h6>Password</h6></Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>
        <div className='mt-5 text-center'>
        <Button variant="primary" onClick={handleLogin} className='button-spacing'>
          Login
        </Button>
        <Button variant="primary" onClick={handleSignUp} className='button-spacing'>
          Sign Up
        </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
