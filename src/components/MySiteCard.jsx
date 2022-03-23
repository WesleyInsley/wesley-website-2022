import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles/projectscard-styles.css';

const MySiteCard = () => {
    return(
        <>
        <Card className="project-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://wesleyinsley.com/Assets/images/wesley-site.jpg" />
        <Card.Body className="project-card">
            <Card.Title>Personal Portfolio</Card.Title>
            <Card.Text>
            My personal portfolio site. Here to share some information about what I've done.
            </Card.Text>
            <a href="#"><Button className="live-demo-btn" variant="info">Live Demo</Button></a>
            <Button className="live-demo-btn" variant="info">GitHub</Button>
            <Card.Text>
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/html-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/css-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/javascript-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/react-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/react-bootstrap-icon.png" />
            </Card.Text>
        </Card.Body>
        </Card>
        </>
    )
}

export default MySiteCard;