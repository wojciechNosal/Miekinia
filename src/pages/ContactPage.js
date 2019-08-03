import React from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

const ContactPage = ({form}) => {
  return (
    <section className="contact">
      <div className="map">
      </div>
      <div className="form" onChange={form}>
        <h1 className='form__title'>Napisz do nas</h1>
        <form className="form__form">

          <Input
          type='text'
          name='name'
          text='Imię'
          /> 
          <Input
          type='mail'
          name='mail'
          text='e-mail'
          /> 
          <Input
          type='textarea'
          name='message'
          text='Wiadomość'
          />
          
          <Button text="Wyślij" />
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
