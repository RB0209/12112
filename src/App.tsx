
import React from "react";
import HeroSection from "./components/HeroSection";
import ImpactStats from "./components/ImpactStats";
import MissionVision from "./components/MissionVision";
import VolunteerPartner from "./components/VolunteerPartner";
import FeaturedInitiatives from "./components/FeaturedInitiatives";

const App = () => {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <MissionVision />
      <FeaturedInitiatives />
      <VolunteerPartner />
    </>
  );
};

export default App;
