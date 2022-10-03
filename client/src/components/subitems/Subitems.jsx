import React from "react";
import Banner from "../banner/banner";
import Animation from "../animation/animation";
import Animation2 from "../animation2/Animation2";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import Footer from "../footer/footer";
import Parallax from "../parallax/parallax";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../actions";

export default function Subitems() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.todosCountries);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <Banner />
      <Animation />
      <Animation2 />
      <Header />
      <Contact />
      <Parallax />
      <Footer />
    </div>
  );
}
