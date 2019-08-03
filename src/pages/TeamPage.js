import React from 'react';

import personImg from '../assets/img/persons/lego.jpg';

import Person from '../components/Person';

const team = [
  {
    name: 'prof. dr hab. inż. Wojciech Górecki',
    img: personImg
  },
  {
    name: 'dr inż. Anna Sowiżdżał',
    img: personImg
  },
  {
    name: 'mgr inż. Wojciech Luboń',
    img: personImg
  },
  {
    name: 'mgr inż. Jarosław Kotyza',
    img: personImg
  },
  {
    name: 'mgr inż. Grzegorz Pełka',
    img: personImg
  },
  {
    name: 'mgr inż. Paweł Jastrzębski',
    img: personImg
  },
  {
    name: 'mgr Dominika Dawiec',
    img: personImg
  },
  {
    name: 'mgr inż. Bartłomiej Ciapała',
    img: personImg
  },
  {
    name: 'mgr inż. Daniel Malik',
    img: personImg
  },
  {
    name: 'mgr inż. Elżbieta Hałaj',
    img: personImg
  },
  {
    name: 'mgr inż. Paulina Smaczna',
    img: personImg
  }
];

const Team = () => {
  const teamList = team.map(item => <Person key={item.name} {...item} />);

  return <section className="team">{teamList}</section>;
};

export default Team;
