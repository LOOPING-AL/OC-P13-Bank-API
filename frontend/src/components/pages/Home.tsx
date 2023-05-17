import { featureItems } from "../../assets/data/featureItem";
import subtiltes from "../../assets/data/subtitle";
import FeatureItem from "../ui/featureItem/FeatureItem";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import Subtitle from "../ui/subtitles/Subtitle";
import styles from "../../assets/styles/App.module.css";

const Home = () => (
  <div className={styles.App}>
    <Header />

    <main>
      <div className={styles.hero}>
        <section className={`${styles.heroContent}`}>
          <h2 className={`${styles.srOnly}`}>Promoted Content</h2>
          {subtiltes.map((subtitle, index) => (
            <Subtitle key={index} subtitle={subtitle.text} />
          ))}
        </section>
      </div>

      <section className={styles.features}>
        <h2 className={`${styles.srOnly}`}>Features</h2>
        <div className={styles.featureItems}>
          {featureItems.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              paragraph={feature.paragraph}
            />
          ))}
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Home;
