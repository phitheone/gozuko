import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./clan2.css";

import avatar from "../../Images/samurai2.gif";

const Clan2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="C2Super">
      <div className="C2Container">
        <div className="C2Title">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <h2>Clan Yume:</h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <h3>Visions and Balance</h3>
          </div>
        </div>
        <div className="C2SubContainer">
          <div
            className="C2Text"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <p>
              Thought and sensation, ideas and feelings, these are the things
              that make us… well, us. With the help from many herbs and other
              substances members of the Yume clan are the bringers of clarity
              and communion with the Dream Gods. The Yume are temple and
              wandering monks that share their clarity to all Gozuko inhabitants
              through the best hallucinogens ever dreamed. Literally.
            </p>
            <p>
              “Once I dreamed of you, young musician… what? You say you’re a
              dancer? But movement is music, I know you can hear it, or see it?
              Don’t remember which is which hahaha”
            </p>
            <h4>-Maarori Bobu, great Yume priest.</h4>
          </div>
          <div
            className="C2Image"
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clan2;
