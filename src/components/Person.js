import React from 'react';
import '../styles/components/Person.scss';

const Person = ({ name, img }) => {
  return (
    <div className="member">
      <img className="member__img" src={img} alt={name} />
      <div className="member__description">
        <h2 className="member__name">{name}</h2>
        <p className="member__tel">tel: 12 456 987</p>
        <p className="member__mail">mail: wikings@gmail.com</p>
      </div>
    </div>
  );
};

export default Person;
