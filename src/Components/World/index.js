import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./world.css";

import world from "../../Images/world.png";

const World = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="WSuper">
      <div className="WContainer">
        <div
          className="WTitle"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <h2>Our Mystycal Land</h2>
        </div>
        <div className="WText">
          <div
            className="WTParagraph"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="1000"
          >
            <p>
              The mystical Gozuko shogunate, a peaceful kingdom located where
              the dream and material realms collide, is the place where our
              story begins. Three Clans serve the Shogun on his eternal search
              for balance of the divine chill vibes. They organize festivals,
              dance tournaments, concerts and many more activities to maintain
              the peace and happiness amongst its denizens.
            </p>
          </div>
          <div
            className="WTParagraph"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="2000"
          >
            <p>
              The clans, named Mau, Yume and Onpu, guard the three sacred gifts
              from the Shogun: Dance, Dreams and Music, respectively. Every
              seven years the Shogun interrupts his meditation and lets the
              leaders of each clan into the Cloud Palace, to hear about all the
              cool things that his people have done. This fills him with
              happiness and so he gives his blessings to Gozuko and all its
              inhabitants.
            </p>
          </div>
        </div>
        <div
          className="WImage"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          <img src={world} alt="" />
        </div>
      </div>
    </div>
  );
};

export default World;
