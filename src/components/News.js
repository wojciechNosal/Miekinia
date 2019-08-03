import React from 'react';

import Button from './Button';

const News = ({ data, title, img, text }) => {
  return (
    <div className="news-container">
      <p className='news-container__data'>{data}</p>
      <h2 className='news-container__title'>{title}</h2>
      {img ? <img className='news-container__img' src={img} alt={title} /> : null}
      <p className='news-container__text'>{text}</p>
      <Button text='więcej' btnClass='news-container__btn'/>
    </div>
  )
}

export default News;