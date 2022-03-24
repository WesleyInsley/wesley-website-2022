import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles/projectscard-styles.css';
// Toastify Import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProjectsCard = () => {

    const notAvailable = () => toast.error("this feature or content is not available yet. :( Please check later!");

    return(
        <>
        <Card className="project-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://wesleyinsley.com/Assets/images/default-img.jpg" />
        <Card.Body className="project-card">
            <Card.Title>Chat App</Card.Title>
            <Card.Text>
            A small React App that utilizes Firebase Authentication and Firestore to create a chat room.
            </Card.Text>
            <Button onClick={notAvailable} className="live-demo-btn" variant="info">Live Demo</Button>
            <Button onClick={notAvailable} className="live-demo-btn" variant="info">GitHub</Button>
            <Card.Text>
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/html-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/css-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/javascript-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/react-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/react-bootstrap-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/firebase-icon.png" />
            </Card.Text>
        </Card.Body>
        </Card>
        </>
    )
}

export default ProjectsCard;