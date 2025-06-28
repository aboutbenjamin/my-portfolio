import Case from "../../components/case/Case";
import { CASES } from "../../constansts/cases";
import styles from "./Home.module.css";

function HomeScreen() {
  return (
    <main className={styles["main-container"]}>
      <section className={styles["home-title"]}>
        <h1>
          Hi, I am Benjamin and I am a strategic product designer and engineer.{" "}
          <br />I create products people{" "}
          <span className={styles["love-animate"]}>love</span> to use.
        </h1>
      </section>
      <section className={styles["cases-section"]}>
        <h1>Cases</h1>
        <div className={styles["cases-grid"]}>
          <div className={styles["cases-col-left"]}>
            <Case title={CASES[0].title} tags={CASES[0].tags} image={CASES[0].image} />
            <Case title={CASES[1].title} tags={CASES[1].tags} image={CASES[1].image} />
            <Case title={CASES[2].title} tags={CASES[2].tags} image={CASES[2].image} />
            <Case title={CASES[3].title} tags={CASES[3].tags} image={CASES[3].image} />
          </div>
          <div className={styles["cases-col-right"]}>
            <Case title={CASES[4].title} tags={CASES[4].tags} image={CASES[4].image} />
            <Case title={CASES[5].title} tags={CASES[5].tags} image={CASES[5].image} />
            <Case title={CASES[6].title} tags={CASES[6].tags} image={CASES[6].image} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeScreen;
