import React from "react";
import HeroImg from "../components/OurStory/MainContent/HeroImg";
import ShortMessage from "../components/OurStory/MainContent/ShortMessage";
import Vow from "../components/OurStory/MainContent/Vow";
import SamplePics from "../components/OurStory/MainContent/SamplePics";
import HeaderText from "../components/OurStory/Header/HeaderText";

export default function OurStory() {
  return (
    <main className="main-content">
      <HeaderText />
      <HeroImg />
      {/* <HomeCarousel /> */}
      <ShortMessage />
      <SamplePics />
      <Vow />
    </main>
  );
}
