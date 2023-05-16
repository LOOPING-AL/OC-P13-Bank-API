import React from "react";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import FeatureItem from "../ui/featureItem/FeatureItem";
import { featureItems } from "../../assets/data/featureItem";
import Subtitle from "../ui/subtitles/Subtitle";
import subtiltes from "../../assets/data/subtitle";

const Home = () => (
  <div className="App">
    <Header />

    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          {subtiltes.map((subtitle, index) => (
            <Subtitle key={index} subtitle={subtitle.text} />
          ))}
        </section>
      </div>

      <section className="features">
        <h2 className="sr-only">Features</h2>

        {featureItems.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            paragraph={feature.paragraph}
          />
        ))}
      </section>
    </main>

    <Footer />
  </div>
);

export default Home;
