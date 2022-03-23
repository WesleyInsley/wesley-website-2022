import React from 'react';
import './styles/techcard-styles.css';


const TechCard = ({ image }) => {
    return(
        <>
            <div className="tech-icons">
                <img className="tech-icons-image" src={image}></img>
            </div>
        </>
    )
}

export default TechCard;