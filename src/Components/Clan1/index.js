import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./clan1.css";

import avatar from "../../Images/samurai1.gif";

const Clan1 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="C1Super">
      <div className="C1Container">
        <div className="C1Title">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <h2>Clan Mau:</h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <h3>Dance and Discipline</h3>
          </div>
        </div>
        <div className="C1SubContainer">
          <div
            className="C1Image"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <img src={avatar} alt="" />
          </div>
          <div
            className="C1Text"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            // data-aos-delay="1000"
          >
            <p>
              Bringers of dynamism and movement, the Mau Clan members are
              graceful as they are agile dancers. They train for years with
              weapons and their bodies to master artistic expression through
              their movements. When you are fortunate enough to see a Mau Clan
              member performing in your village, you can’t simply not watch.
              They also make awesome parties.
            </p>
            <p>
              “There are many things that words can’t say, many emotions that
              music can’t express. With the proper training, the body do these
              things a thousand times better”
            </p>
            <h4>-Mau Yaseryo, Mau Clan kata master.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clan1;
