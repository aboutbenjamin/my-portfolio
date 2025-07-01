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
            {CASES.filter((_, idx) => idx % 2 === 0).map((c, i) => (
              <Case
                key={i * 2}
                caseData={c}
                imgRef={getImgRef(i * 2)}
                onClick={() => handleCaseClick(i * 2)}
              />
            ))}
          </div>
          <div className={styles["cases-col-right"]}>
            {CASES.filter((_, idx) => idx % 2 === 1).map((c, i) => (
              <Case
                key={i * 2 + 1}
                caseData={c}
                imgRef={getImgRef(i * 2 + 1)}
                onClick={() => handleCaseClick(i * 2 + 1)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeScreen;
