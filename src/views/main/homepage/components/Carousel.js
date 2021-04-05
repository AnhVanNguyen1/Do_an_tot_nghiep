import React from 'react';
import './carousel.scss';
const CarouselPage = () => {
  return (
    <div className="container">
      <div className="slider">
        <div className="box1 box">
          <div className="bg-carousel"></div>
          <div className="details">
            <h1>I'm the first Box</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
              pellentesque eget.
            </p>
            <button>Check Now</button>
          </div>

          <div className="illustration">
            <div className="inner"></div>
          </div>
        </div>

        <div className="box2 box">
          <div className="bg-carousel"></div>
          <div className="details">
            <h1>I'm the second Box</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
              pellentesque eget.
            </p>
            <button>Check Now</button>
          </div>

          <div className="illustration">
            <div className="inner"></div>
          </div>
        </div>

        <div className="box3 box">
          <div className="bg-carousel"></div>
          <div className="details">
            <h1>I'm the third Box</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
              pellentesque eget.
            </p>
            <button>Check Now</button>
          </div>

          <div className="illustration">
            <div className="inner"></div>
          </div>
        </div>

        <div className="box4 box">
          <div className="bg-carousel"></div>
          <div className="details">
            <h1>I'm the fourth Box</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
              pellentesque eget.
            </p>
            <button>Check Now</button>
          </div>

          <div className="illustration">
            <div className="inner"></div>
          </div>
        </div>

        <div className="box5 box">
          <div className="bg-carousel"></div>
          <div className="details">
            <h1>I'm the fifth Box</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
              pellentesque eget.
            </p>
            <button>Check Now</button>
          </div>

          <div className="illustration">
            <div className="inner"></div>
          </div>
        </div>
      </div>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="prev"
        width="56.898"
        height="91"
        viewBox="0 0 56.898 91"
      >
        <path
          d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
          transform="translate(0 91) rotate(-90)"
          fill="#fff"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="next"
        width="56.898"
        height="91"
        viewBox="0 0 56.898 91"
      >
        <path
          d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
          transform="translate(56.898) rotate(90)"
          fill="#fff"
        />
      </svg> */}
    </div>
  );
};

export default CarouselPage;
