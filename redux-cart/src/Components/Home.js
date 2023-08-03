import React from "react";

const HomePage = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          className="image"
          src="https://img.pikbest.com/backgrounds/20201126/modern-black-and-red-black-friday-sale-banner-design-template-v_5608952jpg!w700wp"
          alt="logo"
        />
      </div> 
        <div className="text-container">
        <div className="text-overlay">
          <h1>Welcome to React-Redux-Cart</h1>
          <p>An E-commerce platform that is made to impress!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;