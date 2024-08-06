import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserProfilePopup from './UserProfilePopup'; // Import UserProfilePopup component
import { FaLock, FaBook, FaComments, FaMoneyBillAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'; // Import icons
import { FaMapMarkerAlt } from 'react-icons/fa';
import './MyResponsibility.css';

function MyResponsibility() {
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/login');
    };

    const handleProfileClick = () => {
        setShowProfile(true);
    };

    const handleCloseProfile = () => {
        setShowProfile(false);
    };

    return (
        <Container className="my-responsibility-container mt-5">
            <Card className="responsibility-card">
                <Card.Body>
                    <h2>Hello {user.email || 'User'}</h2>
                    <p>06 Aug 2024</p>
                    <Card className="mb-4 branch-card text-white" style={{ backgroundColor: "#A98ED8",borderRadius:"15px" }}>
                        <Card.Body className="d-flex justify-content-between align-items-center">
                            <div>
                            <Card.Title>
                                <FaMapMarkerAlt className="branch-icon" />
                            </Card.Title>
                            </div>
                            <div>
                                <Card.Title>
                                    BRANCH NAME
                                </Card.Title>
                                <Card.Text>Lorem Ipsum dolor set lorem</Card.Text>
                            </div>
                            <div>
                                <p>9.00 AM</p>
                                <p>5.00 PM</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <h3>My Responsibilities</h3>
                    <Row className="mt-3">
                        <Col xs={6} className="mb-3">
                            <Card className="text-center task-card" style={{ backgroundColor: "#fff3e0",borderRadius:"25px" }}>
                                <Card.Body>
                                    <FaLock className="responsibility-icon" />
                                    <Card.Title>My Task</Card.Title>
                                    <Card.Text>Temperature lock</Card.Text>
                                    <Button variant="success">Completed</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} className="mb-3">
                            <Card className="text-center learning-card" style={{ backgroundColor: "#e0f7fa",borderRadius:"25px" }}>
                                <Card.Body style={{ height: "156px" }}>
                                    <FaBook className="responsibility-icon" />
                                    <Card.Title>My Learning</Card.Title>
                                    <Card.Text>Reading materials</Card.Text>
                                    <ProgressBar variant="blue" now={50} label={`${50}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} className="mb-3">
                            <Card className="text-center communications-card" style={{ backgroundColor: "#fce4ec",borderRadius:"25px" }}>
                                <Card.Body>
                                    <FaComments className="responsibility-icon" />
                                    <Card.Title>Communications</Card.Title>
                                    <Card.Text>Meetings and others</Card.Text>
                                    <ProgressBar variant="danger" now={50} label={`${50}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} className="mb-3">
                            <Card className="text-center benefits-card" style={{ backgroundColor: "#e1f5fe",borderRadius:"25px" }}>
                                <Card.Body style={{ height: "135px" }}>
                                    <FaMoneyBillAlt className="responsibility-icon" />
                                    <Card.Title>My Benefits</Card.Title>
                                    <Card.Text>Salary and others</Card.Text>
                                    {/* <ProgressBar variant="info" now={50} label={`${50}%`} /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'150px'}}>
                        <Col className="text-center">
                            <Button variant="danger" onClick={handleLogout}><FaSignOutAlt/> Sign Out as RP</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <footer className="footer">
                <Button variant="primary" onClick={handleProfileClick}>
                    <FaUser /> Profile
                </Button>
            </footer>
            <UserProfilePopup show={showProfile} handleClose={handleCloseProfile} />
        </Container>
    );
}

export default MyResponsibility;
