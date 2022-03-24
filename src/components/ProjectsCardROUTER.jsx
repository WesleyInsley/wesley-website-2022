import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles/projectscard-styles.css';
// Toastify Import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectsCardROUTER = () => {

    const notAvailable = () => toast.error("this feature or content is not available yet. :( Please check later!");

    return(
        <>
        <Card className="project-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://wesleyinsley.com/Assets/images/default-img.jpg" />
        <Card.Body className="project-card">
            <Card.Title>Tiny Tea NYC</Card.Title>
            <Card.Text>
                Informational multi-page site for a small tea shop in New York City.
            </Card.Text>
            <Button onClick={notAvailable} className="live-demo-btn" variant="info">Live Demo</Button>
            <Button onClick={notAvailable} className="live-demo-btn" variant="info">GitHub</Button>
            <Card.Text>
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/html-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/css-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/javascript-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/react-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/react-bootstrap-icon.png" />
            <img className="project-img" src="https://wesleyinsley.com/Assets/images/react-router.png" />
            </Card.Text>
        </Card.Body>
        </Card>
        </>
    )
}

export default ProjectsCardROUTER;