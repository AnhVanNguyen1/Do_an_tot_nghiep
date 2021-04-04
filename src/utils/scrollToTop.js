import React, { useEffect, useState } from 'react';
import { RiRocketLine } from 'react-icons/ri';
export default function ScrollToTop({ showBellow = 100 }) {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBellow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };
  useEffect(() => {
    if (showBellow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="scroll-to-top">
      {show && (
        <div onClick={() => handleClick()} className="btn-scroll">
          <RiRocketLine size={30} color="#00d4ff" />
        </div>
      )}
    </div>
  );
}
