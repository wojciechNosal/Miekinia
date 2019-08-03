import React from 'react';
import '../styles/pages/BUSPage.scss';

import Button from '../components/Button';

const BUS = () => {
  return (
    <section className="BUS">
      <h1 className='BUS__title'>Laboratorium</h1>
      <p className="BUS__text">
        W ramach projektu pt. BUdowanie Sieci współpracy na rzecz promocji Odnawialnych Źródeł Energii – BUS OZE prowadzony jest cykl spotkań, szkoleń, wizyt studyjnych, które zwieńczone zostaną opracowaniem koncepcji zagospodarowania Małopolskiego Centrum Odnawialnych Źródeł i Poszanowania Energii w Miękini. Zasadniczym celem prac projektowych jest wypracowanie nowego modelu współpracy na zasadzie utworzenia nowego kanału transferu informacji, wiedzy oraz know-how, dotyczących teorii i praktyki w zakresie wdrażania i monitorowania efektywności odnawialnych źródeł energii.
      </p>
      <Button
        href='http://www.busoze.miekinia.agh.edu.pl/'
        text='Zobacz stronę'
      />
    </section>
  )
}

export default BUS;