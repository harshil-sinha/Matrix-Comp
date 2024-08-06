import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import UserProfilePopup from './UserProfilePopup';

function Footer() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container>
      <footer className="footer">
        <Button variant="link" onClick={handleShow}>
          <i className="fa fa-user"></i>
        </Button>
      </footer>
      <UserProfilePopup show={show} handleClose={handleClose} />
    </Container>
  );
}

export default Footer;
