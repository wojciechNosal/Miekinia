import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name, img, phone, mail }) => {
  return (
    <div className="member">
      <img className="member__img" src={img} alt={name} />
      <div className="member__description">
        <h2 className="member__name">{name}</h2>
        <p className="member__tel">tel: {phone}</p>
        <p className="member__mail">mail: {mail}</p>
      </div>
    </div>
  );
};

Person.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  mail: PropTypes.string
}

Person.defaultProps = {
  img: ' ',
  phone: '12 678 345',
  mail: 'miekinia@kontakt.agh.pl'
}

export default Person;
