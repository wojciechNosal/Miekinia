import React from 'react';

import Button from '../components/Button';

const mainContent = [
  'Centrum Zrównoważonego Rozwoju i Poszanowania Energii WGGiOŚ, AGH w Miękini mieści się w ośrodku, który do 2009 stanowił bazę dla odbywających się w okolicy praktyk terenowych z kartografii geologicznej, geofizyki oraz geologii górniczej. Część z tych praktyk prowadzona były przez doktorantów Wydziału. Ośrodek był wykorzystywany również przez wydziałowe koła naukowe dla celów organizacji studenckich sesji naukowych. Od roku 2010 trwają prace nad jego modernizacją. Powstaje Małopolskie Centrum Odnawialnych Źródeł i Poszanowania Energii „Miękinia”.',
  'Celem Małopolskiego Centrum Odnawialnych Źródeł i Poszanowania Energii w Miękini jest udoskonalenie bazy dydaktycznej i naukowo-badawczej, co w przyszłości wpłynie na podniesienie jakości oferty edukacyjnej. Dzięki realizacji przedsięwzięcia będzie możliwe prowadzenie międzynarodowych projektów szkoleniowych dla studentów i kadry dydaktycznej z różnych stron świata.'
];

const handleButtonClick = e => {
  const elementToChange = document.querySelectorAll('.home-page > div');
  elementToChange[0].classList.toggle('home-page__name-container--in');
  elementToChange[1].classList.toggle('home-page__main-content--out');
};

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="home-page__name-container">
        <h1 className='home-page__hero-text'>
          Centrum Zrównoważonego Rozwoju<br /> i&nbsp;Poszanowania Energii
        </h1>
        <h2 className='home-page__hero-text-small'>WGGiOŚ AGH</h2>
        <Button
          btnClass="home-page__btn"
          changeViev={handleButtonClick}
        >Zobacz więcej</Button>
      </div>
      <div className="home-page__main-content">
        <p className='home-page__text'>{mainContent[0]}</p>
        <p className='home-page__text'>{mainContent[1]}</p>
        <Button changeViev={handleButtonClick}>wróć</Button>
      </div>
    </section>
  );
};

export default HomePage;
