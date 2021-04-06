import React, { useState } from 'react';
import "./style.css";
import { Data } from './data';

const Accord = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = id => {
    if (clicked === id) {
      return setClicked(null);
    }

    setClicked(id);
  };

  return (
      <main className="main">
        <div className="container">
          <div className="features">
            <div className="features__items_1">
              <img src="images/illustration-woman-online-desktop.svg" alt="woman" className="woman"/>
            </div>
            <div className="features__items_2">
              <h1>FAQ</h1>
              <div className="block">
                {Data.map((items) => {
                  return (         
                    <>
                      <div className="block__items" onClick={() => toggle(items.id)} key={items.id}>
                        <p className={clicked === items.id ? "p_active" : null} > {items.title} </p>
                        <img src={items.imgSrc} className={clicked === items.id ? "img__active" : null} alt="arrow" />
                      </div>
                      { clicked === items.id ? (
                        <div>
                          <span>{items.content}</span>
                        </div>
                      ) : null }
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Accord;
