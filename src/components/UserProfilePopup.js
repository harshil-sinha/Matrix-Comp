import React from 'react';
import { Modal, Button, Card, ListGroup } from 'react-bootstrap';
import { FaTasks, FaBook, FaComments, FaGift, FaDatabase, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import './UserProfileCss.css'; // Import custom styles if needed

function UserProfilePopup({ show, handleClose }) {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="user-profile">
          <div className="user-image text-center">
            <img 
              src="../img.png" 
              alt="User" 
              className="img-fluid rounded-circle"
              width="100"
              height="100"
            />
          </div>
          <div className="user-info text-center mt-3">
            <h5>{user.email || "Niranjan"}</h5>
            <p className='text-success'>Pharmacist | 123GTB</p>
          </div>
          <div className="profile-details mt-4">
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item><FaTasks style={{color:"#6AB1F5"}}/> My Tasks</ListGroup.Item>
                <ListGroup.Item><FaBook style={{color:"#6AB1F5"}}/> My Learnings</ListGroup.Item>
                <ListGroup.Item><FaComments style={{color:"#6AB1F5"}}/> My Communications</ListGroup.Item>
                <ListGroup.Item><FaGift style={{color:"#6AB1F5"}}/> My Benefits</ListGroup.Item>
                <ListGroup.Item><FaDatabase style={{color:"#6AB1F5"}}/> My Database</ListGroup.Item>
                <ListGroup.Item><FaSignOutAlt style={{ color: 'red' }} /> Log Out</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserProfilePopup;
