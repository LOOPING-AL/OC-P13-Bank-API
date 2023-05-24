import { styles } from "../../../assets";
import { Footer, Header } from "../../ui";
import HomeContent from "./HomeContent";

const Home = () => (
  <div className={styles.App}>
    <Header />

    <HomeContent />

    <Footer />
  </div>
);

export default Home;
