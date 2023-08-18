import { Navbar, Hero, About, Projects, CTA, Footer } from "./components";
import styles from "./style";

const App = () => (
  <div className="bg-primary  w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} shadow-md`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero Section  */}
    <div className={`bg-secondary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* About Section  */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
      </div>
    </div>

    {/* Projects Section  */}
    <div className={`bg-secondary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Projects />
      </div>
    </div>

    {/* CTA Section  */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
      </div>
    </div>

    {/* Footer Section  */}
    <div className={`bg-textColor ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
