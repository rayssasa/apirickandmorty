import React, { useState } from 'react'
import './Styles.css';
import Modal from './Modal.js';

const Search = ({item}) => {
  const [ isModalVisible, setIsModalVisible] = useState(false);
  const {image,name,origin} = item;
  return (
    <div className= "character">
            <img onClick={() => setIsModalVisible(true)} className="characterpic" src={image} alt={name} />
                {isModalVisible ? ( <Modal onClose={() => setIsModalVisible(false)} item={item} /> ) : null}
            <h1>{name}</h1>
            <h2>{origin.name}</h2>
    </div>
  )
};

export default Search;

