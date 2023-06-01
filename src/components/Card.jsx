import React from 'react';
import PropTypes from 'prop-types';

function Card({ color, nombre }) {
  return (
    <div>
      <h2>Tarjeta</h2>
      <p>Color: {color}</p>
      <p>Nombre: {nombre}</p>
    </div>
  );
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
};

export default Card;