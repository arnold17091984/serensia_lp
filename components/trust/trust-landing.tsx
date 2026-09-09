import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "../mcy/contact";
import { CASES } from "../mcy/pricing-data";
import { FAQ } from "../mcy/faq-data";
import McyStickyCta from "../mcy/McyStickyCta";
import styles from "./trust-landing.module.css";

function ContactActions({ location }: Readonly<{ location: string }>) {
  return (
    <div className={styles.contactActions} data-cta-section>
      <a
        href={PHONE_TEL}
        data-gtm={`cta_tel_${location}`}
        className={styles.phoneAction}
      >
        <span>電話で相談する</span>
        <strong>{PHONE_DISPLAY}</strong>
        <small>9:00〜21:00・年中無休</small>
      </a>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm={`cta_line_${location}`}
        className={styles.lineAction}
      >
        <span>写真がなくても大丈夫</span>
        <strong>LINEで相談する</strong>
        <small>24時間受付・確認次第ご返信</small>
      </a>
    </div>
  );
}

const SERVICES = [
  {
    title: "汚染の除去・除菌・消臭",
    body: "体液の除去、汚染箇所の特殊洗浄、除菌・消毒、薬剤や機械による臭気対策。現場の状態に合わせて作業します。",
  },
  {
    title: "遺品整理・貴重品の探索",
    body: "特殊清掃とあわせて、室内に残されたお品物の仕分け・搬出に対応。貴重品や残したいお品物についてもご相談ください。",
  },
  {
    title: "原状回復までのご相談",
    body: "汚染が建材に染み込んでいる場合は、床材や畳の撤去を含めて確認。原状回復に必要な作業をご案内します。",
  },
];
const STEPS = [
  [
    "まずは状況をお聞かせください",
    "場所、お部屋の状態、ご希望の日程など、分かる範囲で大丈夫です。写真がなくてもご相談いただけます。",
  ],
  [
    "現地を確認し、お見積り",
    "汚染の範囲や臭いの状況を確認し、作業内容と金額をご案内します。ご相談・お見積り・出張費用は無料です。",
  ],
  [
    "内容にご納得いただいてから契約",
    "見積り内容をご確認いただき、ご納得のうえでご契約。作業前にスケジュールをご案内します。",
  ],
  [
    "清掃・消臭と、完了のご報告",
    "近隣に配慮しながら作業し、仕上がりをご確認いただきます。立ち会いが難しい場合は写真などでご報告します。",
  ],
];

/** Existing service facts and case records, arranged for an informed decision. */
export default function TrustLanding() {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#main-content">
        本文へ移動
      </a>
      <header className={styles.header}>
        <a
          href="/"
          className={styles.brand}
          aria-label="特殊清掃・遺品整理 セレンシア ホーム"
        >
          <span>特殊清掃・遺品整理</span>
          <strong>セレンシア</strong>
        </a>
        <nav aria-label="ページ内案内" className={styles.navigation}>
          <a href="#service" data-gtm="nav_service">
            対応内容
          </a>
          <a href="#ryokin" data-gtm="nav_pricing">
            料金・作業事例
          </a>
          <a href="#about" data-gtm="nav_company">
            私たちについて
          </a>
          <a href="#faq" data-gtm="nav_faq">
            よくあるご質問
          </a>
        </nav>
        <a
          href="#contact"
          className={styles.headerContact}
          data-gtm="nav_contact"
        >
          無料相談
        </a>
      </header>
      <main id="main-content">
        <section className={styles.hero} data-section="hero">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.area}>東京・神奈川の特殊清掃</p>
              <h1>
                突然のことで、
                <br />
                何から始めればいいか
                <br />
                分からないあなたへ。
              </h1>
              <p className={styles.heroLead}>
                孤独死・事故現場の清掃から、消臭、遺品整理まで。
                <br className={styles.desktopBreak} />
                まずは状況を伺い、必要な対応を一緒に整理します。
              </p>
              <div className={styles.heroFacts}>
                <span>相談・見積り無料</span>
                <span>立ち会い不要</span>
                <span>近隣への配慮</span>
              </div>
              <div className={styles.heroContact}>
                <ContactActions location="fv" />
                <p className={styles.contactNote}>
                  現地確認は最短即日。対応日程はご相談時にご案内します。
                </p>
              </div>
            </div>
            <figure className={styles.heroPortrait}>
              <img
                src="/img/daihyo_photo.webp"
                alt="セレンシア代表 太田貴也"
                width={760}
                height={862}
                fetchPriority="high"
              />
              <figcaption>
                <span>最初のご相談は、代表が直接伺います。</span>
                <div>
                  <small>株式会社TAKAKU 代表</small>
                  <strong>太田 貴也</strong>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <div className={styles.serviceStrip}>
          <div className={styles.container}>
            <p>
              <span>対応エリア</span>東京・神奈川を中心に関東一円
            </p>
            <a href="#nagare" data-gtm="nav_flow">
              ご相談から作業完了までの流れ <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <section
          id="service"
          data-section="service"
          className={`${styles.section} ${styles.container}`}
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>お困りの状況からご相談ください</p>
              <h2>
                お部屋のことも、
                <br />
                残されたお品物のことも。
              </h2>
            </div>
            <p>
              「臭いが強くて入れない」「遠方で現地に行けない」。
              <br />
              うまく説明できなくても構いません。
              <br />
              今、分かっていることからお聞かせください。
            </p>
          </div>
          <div className={styles.serviceGrid}>
            <figure className={styles.workPhoto}>
              <img
                src="/img/gallery_2.webp"
                alt="防護服を着用して室内の窓まわりを清掃する作業員"
                width={700}
                height={900}
                loading="lazy"
              />
              <figcaption>実際の作業風景：室内・窓まわりの除菌消毒</figcaption>
            </figure>
            <div className={styles.serviceList}>
              {SERVICES.map((service) => (
                <article key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
              <div className={styles.ownerNote}>
                <h3>大家様・管理会社様へ</h3>
                <p>
                  鍵のお預かり、立ち会いなしでの作業、作業前後の写真報告にも対応します。遠方からのご依頼もご相談ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ryokin"
          data-section="pricing"
          className={`${styles.section} ${styles.priceSection}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.kicker}>費用を判断するために</p>
                <h2>
                  作業内容とあわせて、
                  <br />
                  料金をご確認ください。
                </h2>
              </div>
              <p>
                費用は汚染の範囲・臭気・建材への浸透などで変わります。
                <br />
                掲載金額は事例の参考価格です。
                <br />
                現場を確認して、必要な作業と金額をお伝えします。
              </p>
            </div>
            <div className={styles.priceSummary}>
              <div>
                <h3>特殊清掃の料金目安</h3>
                <p>
                  <strong>50,000</strong>円〜
                </p>
                <span>空間除菌・消毒のみの簡易対応の場合</span>
              </div>
              <div>
                <h3>体液除去などを伴う作業</h3>
                <p>
                  <strong>150,000</strong>円〜
                </p>
                <span>下記のトイレの特殊清掃事例を参照</span>
              </div>
              <p className={styles.priceAssurance}>
                お見積り確定後の追加費用はありません。
                <br />
                金額にご納得いただいてから作業を開始します。
              </p>
            </div>
            <div className={styles.caseGrid}>
              {CASES.map((item, index) => (
                <article
                  key={item.title}
                  id={`case-${index + 1}`}
                  className={styles.caseCard}
                >
                  <div className={styles.caseImage}>
                    <img
                      src={item.after}
                      alt={`${item.title}の作業後`}
                      width={640}
                      height={420}
                      loading="lazy"
                    />
                    <span>作業後</span>
                  </div>
                  <div className={styles.caseBody}>
                    <h3>{item.title}</h3>
                    <p className={styles.casePrice}>
                      <span>参考価格</span>
                      <strong>{item.price}</strong>円
                    </p>
                    <details className={styles.caseDetails}>
                      <summary>
                        作業内容・費用の内訳を見る
                        <span aria-hidden="true">＋</span>
                      </summary>
                      <div>
                        {item.desc && <p>{item.desc}</p>}
                        {item.work.length > 0 && (
                          <ul>
                            {item.work.map((work) => (
                              <li key={work}>{work}</li>
                            ))}
                          </ul>
                        )}
                        {item.workGroups?.map((group) => (
                          <div key={group.label}>
                            <h4>{group.label}</h4>
                            <ul>
                              {group.items.map((work) => (
                                <li key={work}>{work}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {item.reasons && (
                          <>
                            <h4>料金が変わる主な要因</h4>
                            <ul>
                              {item.reasons.map((reason) => (
                                <li key={reason}>{reason}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {item.priceNotes.map((note) => (
                          <p key={note}>{note}</p>
                        ))}
                        <details className={styles.beforePhoto}>
                          <summary>
                            作業前の写真を表示する
                            <br />
                            <small>汚染箇所の写真が含まれます</small>
                          </summary>
                          <img
                            src={item.before}
                            alt={`${item.title}の作業前の汚染状況`}
                            width={640}
                            height={420}
                            loading="lazy"
                          />
                        </details>
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.priceFootnote}>
              同じ間取りでも作業内容によって費用は異なります。ご自身の状況に近い事例がない場合も、お気軽にご相談ください。
            </p>
            <a
              href="#contact"
              className={styles.textLink}
              data-gtm="pricing_consultation"
            >
              ご自身の状況で相談する <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          id="about"
          data-section="trust"
          className={`${styles.section} ${styles.container}`}
        >
          <div className={styles.aboutGrid}>
            <div className={styles.aboutIntro}>
              <p className={styles.kicker}>私たちについて</p>
              <h2>
                誰に任せるか。
                <br />
                その不安にも、
                <br />
                きちんとお答えします。
              </h2>
              <p>
                セレンシアは、株式会社TAKAKUが運営する特殊清掃・遺品整理のサービスです。ご遺族・大家様・管理会社様のお話を伺い、現場の状況に合わせて対応します。
              </p>
              <a
                href="/company"
                className={styles.textLink}
                data-gtm="company_details"
              >
                会社概要を確認する <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className={styles.companyFacts}>
              <div className={styles.representative}>
                <img
                  src="/img/daihyo_photo.webp"
                  alt="代表 太田貴也"
                  width={760}
                  height={862}
                  loading="lazy"
                />
                <div>
                  <p>株式会社TAKAKU 代表</p>
                  <h3>太田 貴也</h3>
                  <p>事件現場特殊清掃士・認定遺品整理士</p>
                </div>
              </div>
              <dl>
                <div>
                  <dt>運営会社</dt>
                  <dd>株式会社TAKAKU</dd>
                </div>
                <div>
                  <dt>所在地</dt>
                  <dd>
                    〒158-0087
                    <br />
                    東京都世田谷区玉堤1丁目21-12
                  </dd>
                </div>
                <div>
                  <dt>保有許可</dt>
                  <dd>
                    東京都公安委員会 古物商許可
                    <br />
                    第303312321474号
                  </dd>
                </div>
                <div>
                  <dt>保有資格</dt>
                  <dd>遺品整理士（地区統括会員）</dd>
                </div>
                <div>
                  <dt>保険</dt>
                  <dd>
                    東京海上日動火災保険
                    <br />
                    賠償責任保険加入
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          id="nagare"
          data-section="flow"
          className={`${styles.section} ${styles.flowSection}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.kicker}>ご相談から作業完了まで</p>
                <h2>
                  ご相談のあとも、
                  <br />
                  一つずつ確認しながら。
                </h2>
              </div>
              <p>
                作業内容と金額をご確認いただき、
                <br />
                ご納得いただいてから作業を始めます。
              </p>
            </div>
            <ol className={styles.flowList}>
              {STEPS.map(([title, body], index) => (
                <li key={title}>
                  <span className={styles.stepNumber}>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="faq"
          data-section="faq"
          className={`${styles.section} ${styles.container}`}
        >
          <div className={styles.faqGrid}>
            <div>
              <p className={styles.kicker}>ご相談前に</p>
              <h2>よくあるご質問</h2>
              <p className={styles.faqIntro}>
                費用、日程、遠方からのご依頼。
                <br />
                気になる点をご確認ください。
              </p>
            </div>
            <div className={styles.faqList}>
              {FAQ.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>
                    <span>{question}</span>
                    <span aria-hidden="true">＋</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          data-section="contact"
          className={`${styles.section} ${styles.contactSection}`}
        >
          <div className={styles.contactInner}>
            <p className={styles.kicker}>ご相談・お見積りは無料です</p>
            <h2>
              分かることから、
              <br />
              そのままご相談ください。
            </h2>
            <p>
              お部屋の場所、気になっていること、ご希望の日程。
              <br />
              分かる範囲から、代表の太田がお話を伺います。
            </p>
            <ContactActions location="section" />
            <p className={styles.lineHint}>
              LINEは「特殊清掃について相談したい」と一言からでも。
              <br />
              写真はなくても構いません。確認次第ご返信します。
            </p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div>
              <p>特殊清掃・遺品整理</p>
              <strong>セレンシア</strong>
              <p>運営：株式会社TAKAKU</p>
            </div>
            <div>
              <p>東京・神奈川を中心に関東一円</p>
              <a href={PHONE_TEL} data-gtm="cta_tel_footer">
                {PHONE_DISPLAY}
              </a>
              <p>電話 9:00〜21:00・年中無休</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <nav aria-label="会社・方針">
              <a href="/company">会社概要</a>
              <a href="/privacy">プライバシーポリシー</a>
              <a href="/legal">特定商取引法に基づく表記</a>
            </nav>
            <small>© 株式会社TAKAKU</small>
          </div>
        </div>
      </footer>
      <McyStickyCta />
    </div>
  );
}
