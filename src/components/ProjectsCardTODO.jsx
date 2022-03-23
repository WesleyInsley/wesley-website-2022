import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles/projectscard-styles.css';

const ProjectsCardTODO = () => {
    return(
        <>
        <Card className="project-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://wesleyinsley.com/Assets/images/todo-picture.png" />
        <Card.Body className="project-card">
            <Card.Title>TODO App</Card.Title>
            <Card.Text>
            A small, lightweight TODO App that allows you to keep track of things TODO today.
            </Card.Text>
            <a href="https://wesleyinsley.com/todo-app/" target="_blank"><Button className="live-demo-btn" variant="info">Live Demo</Button></a>
            <a href="https://github.com/WesleyInsley/todo-app" target="_blank"><Button className="live-demo-btn" variant="info">GitHub</Button></a>
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

export default ProjectsCardTODO;