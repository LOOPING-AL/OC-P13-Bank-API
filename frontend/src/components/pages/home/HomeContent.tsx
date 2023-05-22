import { featureItems, subtiltes, styles } from "../../../assets";
import { FeatureItem, Subtitle } from "../../ui";

const HomeContent = () => (
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
);

export default HomeContent;
