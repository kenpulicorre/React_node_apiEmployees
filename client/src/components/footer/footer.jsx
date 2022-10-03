import React from "react";
import git from "../access/git5.png";
import linkin from "../access/link.png";
import wpp from "../access/wpp5.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobeAmericas,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import s from "../footer/footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={s.container}>
        <div className={s.header_footer}>
          <p className={s.title_footer}>
            <span>K</span>enneth
          </p>
          <p>
            Hello everybody, I am Kenneth Puliche C.! My desire for
            self-improvement and desire to learn led me down the path towards
            new technologies, now I have knowledge in full stack development,
            with which I would like to be part of a team to which I can
            contribute with my knowledge, and help each one of its members to
            grow up its Projects.
          </p>
        </div>

        <div className={s.menu_link}>
          <h2>useful links</h2>
          <ul>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <div className="col-sm-4 ">
                <a
                  target="_blank"
                  HREF="https://api.whatsapp.com/send?phone=573114035605"
                >
                  <img src={wpp} className="img-fluid" alt="no imagen" />
                </a>
              </div>
            </li>
            <li>
              <div className="col-sm-3 ">
                <a
                  target="_blank"
                  HREF="https://www.linkedin.com/in/kennethe-p-813311225/"
                >
                  <img src={linkin} className="img-fluid" alt="no imagen" />
                </a>
              </div>
            </li>
            <li>
              <div className="col-sm-3  ">
                <a target="_blank" HREF="https://github.com/kenpulicorre ">
                  <img src={git} className="img-fluid" alt="no imagen" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className={s.arrows}>
          <ul>
            <li>›</li>
            <li>›</li>
            <li>›</li>
            <li>›</li>
          </ul>
        </div>

        <div className={s.contact}>
          <h2>Our contacts</h2>
          <div className={s.directions_container}>
            <div className={s.directions}>
              <div className={s.icon}>
                <FaMapMarkerAlt />
              </div>
              <div className={s.directions_p}>
                <p>1023 California, US,</p>
                <p>34/5 Leavenworth Street, US</p>
              </div>
            </div>

            <div className={s.numbers}>
              <div className={s.icon}>
                <FaPhoneAlt />
              </div>
              <div className={s.numbers_p}>
                <p>+1 246 912 5491</p>
                <p>+1 246 912 5492</p>
              </div>
            </div>

            <div className={s.email}>
              <div className={s.icon}>
                <FaGlobeAmericas />
              </div>
              <div className={s.emails_p}>
                <p>support@inbuild.com</p>
                <p>www.yourcompany.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.suscribe}>
          <h2>subscribe</h2>
          <div className={s.subscribe_description}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          </div>

          <div className={s.input_message}>
            <input type="text" placeholder="Enter Your E-Mail" />
            <div className={s.icon_message}>
              <button>
                <FaTelegramPlane />
              </button>
            </div>
          </div>

          <div className={s.social_media}>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaGoogle />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.final_footer}>
        <p>© 2022 All Rights Reserved.</p>
        <div className={s.policy}>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">Our Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
