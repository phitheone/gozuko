import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./clan3.css";

import avatar from "../../Images/samurai3.gif";

const Clan3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="C3Super">
      <div className="C3Container">
        <div className="C3Title">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <h2>Clan Onpu:</h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <h3>Music and Beauty</h3>
          </div>
        </div>
        <div className="C3SubContainer">
          <div
            className="C3Image"
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <img src={avatar} alt="" />
          </div>
          <div
            className="C3Text"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <p>
              Wordsmiths and masters of all musical instruments. There is no
              place on Gozuko where you can’t hear the soothing tunes of a flute
              or the intelligent notes from a koto accompanied by the clever
              freestyle from the Onpu. Chill vibes of tolerance always seem to
              overcome to any that hear their performances
            </p>
            <p>
              “Nature is music,
              <br />
              words and sound we bring to you
              <br />
              Clan Onpu is dope.”
            </p>
            <h4>-Onpu Ryuko-chan, Onpu Clan leader.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clan3;
