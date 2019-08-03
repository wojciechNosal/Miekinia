import React from 'react';

import Person from '../components/Person';

const memberImg = 'https://randomuser.me/api/portraits/lego/0.jpg';

const team = [
  {
    name: 'prof. dr hab. inż. Wojciech Górecki',
    img: memberImg
  },
  {
    name: 'dr inż. Anna Sowiżdżał',
    img: memberImg
  },
  {
    name: 'mgr inż. Wojciech Luboń',
    img: memberImg
  },
  {
    name: 'mgr inż. Jarosław Kotyza',
    img: memberImg
  },
  {
    name: 'mgr inż. Grzegorz Pełka',
    img: memberImg
  },
  {
    name: 'mgr inż. Paweł Jastrzębski',
    img: memberImg
  },
  {
    name: 'mgr Dominika Dawiec',
    img: memberImg
  },
  {
    name: 'mgr inż. Bartłomiej Ciapała',
    img: memberImg
  },
  {
    name: 'mgr inż. Daniel Malik',
    img: memberImg
  },
  {
    name: 'mgr inż. Elżbieta Hałaj',
    img: memberImg
  },
  {
    name: 'mgr inż. Paulina Smaczna',
    img: memberImg
  }
];

const Team = () => {
  const teamList = team.map(item => <Person key={item.name} {...item} />);

  return <section className="team">{teamList}</section>;
};

export default Team;
