import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from '../assets/img/news/default-img-min.jpg';

import Button from './Button';

const News = ({ data, title, img, text }) => {
  return (
    <div className="news-container">
      <p className='news-container__data'>{data}</p>
      <h2 className='news-container__title'>{title}</h2>
      <img className='news-container__img' src={img ? img : defaultImg} alt={title} />
      <div className="news-container__text-wrapper">
        <p className='news-container__text'>{text}</p>
        <Button btnClass='news-container__btn'
          small
        >Więcej</Button>
      </div>
    </div>
  )
}

News.propTypes = {
  data: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default News;