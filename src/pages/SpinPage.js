import React from 'react';

import Button from '../components/Button';

const Spin = () => {
   return (
      <section className="spin">
         <h1 className='spin__title'>Spin</h1>
         <p className="spin__text">
            Od 4 stycznia 2016 roku Centrum Zrównoważonego Rozwoju i Poszanowania Energii WGGiOŚ AGH w Miękini – jako CTW Miękinia, na podstawie umowy partnerskiej z Województwem Małopolskim w Krakowie, jest Partnerem projektu „SPIN – Małopolskie Centra Transferu Wiedzy” wraz z Centrum Inteligentnych Systemów Informatycznych AGH, Małopolskim Centrum Budownictwa Energooszczędnego Politechniki Krakowskiej oraz Małopolskim Centrum Biotechnologii Uniwersytetu Jagiellońskiego w Krakowie.
      </p>
         <Button
            href='http://www.spin.miekinia.agh.edu.pl/'
            text='Zobacz stronę'
         />
      </section>
   )
}

export default Spin;