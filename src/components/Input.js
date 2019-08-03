import React from 'react';
// import '../styles/components/Input.scss'

const Input = ({type, name, text}) => {

   const Tag = (type === 'textarea'? 'textarea': 'input');

   return ( 
      <div className="form__item">
            <Tag type={type} 
            name={name} 
            id={name} 
            placeholder={name}
            />
            <label htmlFor={name}>
               {text}
            </label>
            <div className="form__bar" />
          </div>
    );
}
 
export default Input;