import React from 'react';

import Button from '../components/Button';

import before1 from '../assets/img/gallery/before/before-1-min.jpg';
import now1 from '../assets/img/gallery/now/now-1-min.jpg';
import after1 from '../assets/img/gallery/after/after-1-min.jpg';

const Element = ({ src, text }) => {
   return (
      <div className="gallery__container">
         <img src={src} alt={text} className="gallery__img" />
         <div className="gallery__column">
            <p className="gallery__text">{text}</p>
            <Button btnClass='gallery__btn btn__small'>Zobacz</Button>
         </div>
      </div>
   )
}


const GalleryPage = () => {
   return (
      <section className="gallery">
         <Element
            src={before1}
            text='Stan przed przebudową'
         />
         <Element
            src={now1}
            text='W trakcie przebudowy'
         />
         <Element
            src={after1}
            text='Stan po przebudowie'
         />
      </section>

   );
}

export default GalleryPage;