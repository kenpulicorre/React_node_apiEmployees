import React from "react";

import s from "../parallax/parallax.module.css";

export default function Parallax() {
  return (
    <div>
      <div className={s.parallax_container}>
        <div className={s.inside_text}>
          <p>Thanks for visit us</p>
          <h2>
            Make sure that the preservation of natural resources becomes a habit
            and not an obligation
          </h2>
        </div>
      </div>
    </div>
  );
}
