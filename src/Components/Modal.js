import React from 'react';
import '../App.css';
import './Modal.css';

const Modal = ({ onClose ,item }) => {
    const {name, gender, species, location, origin, image} = item;

    return (
        <div className="modal">
            <div className="container">
                <button onClick={onClose} className="btn-close">X</button>
                <div>
                    <img className="imagem-overlay" src={image} alt="caracteristicas"/>
                </div>
                    <ul className="info">
                        <h3>About</h3>
                        <li>{name} is a {gender} {species}. Last seen in {location.name}</li>
                        <h4>Origin</h4>
                        <li>{origin.name}</li>
                        <h5>Location</h5>
                        <li>{location.name}</li>
                    </ul>
                </div>
        </div>
    )
};

export default Modal;