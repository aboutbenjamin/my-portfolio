import type { CaseData } from "../../../constansts/cases";
import styles from "./CaseMetaInfo.module.css";

type CaseMetaInfoProps = {
  caseData: CaseData;
};

export function CaseMetaInfo({ caseData }: CaseMetaInfoProps) {
  return (
    <section>
      <dl className={styles.metaInfoList}>
        <div>
          <dt>Client</dt>
          <dd>{caseData.client}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{caseData.startProject}</dd>
        </div>
        <div>
          <dt>Type Case</dt>
          <dd>
            <ul>
              {caseData.tags.map((tag, idx) => (
                <li key={`${tag}-${idx}`}>{tag}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>Reference</dt>
          <dd>
            <a
              href="https://www.website.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.website.com
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
