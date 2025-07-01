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
          {CASES.map((c, idx) => (
            <div
              key={idx}
              className={
                idx % 2 === 0
                  ? styles["cases-col-left"]
                  : styles["cases-col-right"]
              }
            >
              <Case
                caseData={c}
                imgRef={getImgRef(idx)}
                onClick={() => handleCaseClick(idx)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomeScreen;
