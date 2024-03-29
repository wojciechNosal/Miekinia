import React from 'react';

import News from '../components/News';


const news = [
  {
    id: 1,
    data: '31.07.2140r',
    title: 'Zyczenia wielkanocne',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum deserunt vel vitae odio facere alias in nostrum perferendis aut blanditiis asperiores.',
    img: 'http://miekinia.agh.edu.pl/wp-content/uploads/wielkanoc-768x440.png'
  },
  {
    id: 2,
    data: '31.07.2140r',
    title: 'Kongres Trendy Energetyczne',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum deserunt vel vitae odio facere alias in nostrum perferendis aut blanditiis asperiores.',
    img: ''
  },
  {
    id: 3,
    data: '31.07.2140r',
    title: 'Ogłoszenie',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum deserunt vel vitae odio facere alias in nostrum perferendis aut blanditiis asperiores.',
    img: ''
  },
  {
    id: 4,
    data: '31.07.2140r',
    title: 'Szanujmy energię',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum deserunt vel vitae odio facere alias in nostrum perferendis aut blanditiis asperiores.',
    img: ''
  },
]

const NewsPage = () => {

  const newsList = news.map(item => (
    <News key={item.id} {...item} />
  ))
  return (
    <section className="newsPage">
      {newsList}
    </section>
  );
}

export default NewsPage;