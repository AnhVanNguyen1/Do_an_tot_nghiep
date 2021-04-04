import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Products from './components/Products';
import FlashSale from './components/FlashSale';
import FooterPage from './components/Footer';
import ContactPage from './components/Contact';
import ScrollToTop from '../../../utils/scrollToTop';
export default function HomePage() {
  return (
    <div className="wrapper">
      <Header />
      <Carousel />
      <FlashSale />
      <Products />
      <ContactPage />
      <FooterPage />
      <ScrollToTop showBellow={500} />
    </div>
  );
}
