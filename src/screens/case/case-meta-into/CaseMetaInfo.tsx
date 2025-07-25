import type { CaseData } from "../../../types/case";
import { useTranslation } from "../../../i18n/useTranslation";
import styles from "./CaseMetaInfo.module.css";

type CaseMetaInfoProps = {
  caseData: CaseData;
};

export function CaseMetaInfo({ caseData }: CaseMetaInfoProps) {
  const { t } = useTranslation();
  return (
    <section>
      <dl className={styles.metaInfoList}>
        <div>
          <dt>{t("caseInfo.client")}</dt>
          <dd>{caseData.client}</dd>
        </div>
        <div>
          <dt>{t("caseInfo.year")}</dt>
          <dd>{caseData.startProject}</dd>
        </div>
        <div>
          <dt>{t("caseInfo.typeCase")}</dt>
          <dd>
            <ul>
              {caseData.tags.map((tag, idx) => (
                <li key={`${tag}-${idx}`}>
                  {t(tag)}
                  {idx < caseData.tags.length - 1 && <span>,</span>}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>{t("caseInfo.reference")}</dt>
          <dd>
            <a
              href="https://www.website.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {caseData.website}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
