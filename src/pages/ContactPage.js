import React from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

class ContactPage extends React.Component {

  handleChangeContactForm = e => {
    console.log(e.target)
  }

  render() {
    return (
      <section className="contact">
        <div className="map">
        </div>
        <div className="form">
          <h1 className='form__title'>Napisz do nas</h1>
          <form
            className="form__form"
            onChange={this.handleChangeContactForm}
          >

            <Input
              type='text'
              name='name'
              text='Imię'
            />
            <Input
              type='email'
              name='email'
              text='e-mail'
            />
            <Input
              type='textarea'
              name='message'
              text='Wiadomość'
            />

            <Button>Wyślij</Button>
          </form>
        </div>
      </section>
    );
  }
};

export default ContactPage;
