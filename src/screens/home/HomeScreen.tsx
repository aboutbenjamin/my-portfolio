import { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Case from "../../components/case/Case";
import { CASES } from "../../constansts/cases";
import styles from "./HomeScreen.module.css";
import { useTransitionContext } from "../../hooks/use-transition";
import { Header } from "../../components/header-navigation/Header";

function HomeScreen() {
  useEffect(() => {
    document.body.classList.add("home-body");
    return () => {
      document.body.classList.remove("home-body");
    };
  }, []);

  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const { setTransitionData } = useTransitionContext();
  const navigate = useNavigate();

  const handleCaseClick = useCallback(
    (id: number) => {
      const img = imgRefs.current[id];
      if (img) {
        const rect = img.getBoundingClientRect();
        setTransitionData({ id, rect });
      }
      navigate(`/case/${id}`);
    },
    [setTransitionData, navigate]
  );

  const getImgRef = useCallback(
    (idx: number) => (el: HTMLImageElement | null) => {
      imgRefs.current[idx] = el;
    },
    []
  );

  return (
    <main className={styles["main-container"]}>
      <Header />
      <section className={styles["home-title"]}>
        <h1>
          Hi, I am Benjamin and I am a strategic product designer and engineer.{" "}
          <br />I create products people{" "}
          <span className={styles["love-animate"]}>love</span> to use.
        </h1>
      </section>
      <section className={styles["cases-section"]}>
        <h2>Cases</h2>
        <div className={styles["cases-grid"]}>
          <div className={styles["cases-col-left"]}>
            {CASES.slice(0, 4).map((c, idx) => (
              <Case
                key={idx}
                id={idx}
                title={c.title}
                tags={c.tags}
                image={c.image}
                imgRef={getImgRef(idx)}
                onClick={() => handleCaseClick(idx)}
              />
            ))}
          </div>
          <div className={styles["cases-col-right"]}>
            {CASES.slice(4).map((c, idx) => (
              <Case
                key={idx + 4}
                id={idx + 4}
                title={c.title}
                tags={c.tags}
                image={c.image}
                imgRef={getImgRef(idx + 4)}
                onClick={() => handleCaseClick(idx + 4)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeScreen;
