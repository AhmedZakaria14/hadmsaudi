/**
 * مرجع هذا الملف: الصفحة الرئيسية المحفوظة في ملف BuiltUp المرفق من المستخدم.
 * التكييف: نفس تسلسل البطل/التعريف/الخدمات/المشاريع/الأسئلة/التواصل، بمحتوى عربي RTL لخدمات الرياض.
 */
import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  CheckCircle2,
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  Plus,
  Send,
  X,
} from "lucide-react";

const PHONE = "0502833163";
const WHATSAPP = "966502833163";
const WA = `https://wa.me/${WHATSAPP}`;

const themeAssets = {
  hero: "/manus-storage/hero-bg_3c2ca513.jpg",
  about: "/manus-storage/about-us-img_9559db54.png",
  ctaBg: "/manus-storage/cta-box-bg_213ec47f.png",
  ctaImg: "/manus-storage/cta-box-img_3c07fbb3.png",
  faqBg: "/manus-storage/our-faqs-bg_050dba98.png",
  contact: "/manus-storage/contact-info-img_104c334e.png",
  services: [
    "/manus-storage/service-img-1_a4b0b4cb.jpg",
    "/manus-storage/service-img-2_85e81173.jpg",
    "/manus-storage/service-img-3_4dfe7743.jpg",
    "/manus-storage/service-img-4_7619d810.jpg",
  ],
  why: [
    "/manus-storage/why-choose-img-1_15820882.jpg",
    "/manus-storage/why-choose-img-2_0c9abfbe.jpg",
    "/manus-storage/why-choose-img-3_34b1e8b4.jpg",
  ],
  projects: [
    "/manus-storage/our-project-1-1_e27c8e15.jpg",
    "/manus-storage/our-project-2_48c42324.jpg",
    "/manus-storage/our-project-3_1a5eb4c2.jpg",
    "/manus-storage/our-project-4_ea29ad1e.jpg",
  ],
  faq: [
    "/manus-storage/our-faqs-img-1_a806d819.jpg",
    "/manus-storage/our-faqs-img-2_22794f4.jpg",
    "/manus-storage/our-faqs-img-3_46acb158.jpg",
    "/manus-storage/our-faqs-img-4_c6849edd.jpg",
  ],
};

const services = [
  ["ترميم المباني", "تجديد ومعالجة احتياجات المباني والمنازل حسب طبيعة كل موقع."],
  ["هدم المباني", "تنسيق أعمال الهدم للمباني والمنشآت مع ترتيب مراحل العمل."],
  ["تكسير وإزالة", "تكسير وإزالة العناصر المطلوبة ضمن تجهيز الموقع أو إعادة تأهيله."],
  ["رفع مخلفات البناء", "رفع الأنقاض والمخلفات بعد أعمال الترميم أو الهدم أو التكسير."],
];

const benefits = [
  ["خدمات متكاملة", "ترميم، هدم، تكسير، ورفع مخلفات ضمن نطاق عمل واضح."],
  ["ترتيب واضح", "نبدأ من تفاصيل الموقع ونرتب الخطوة المناسبة قبل التنفيذ."],
  ["تواصل مباشر", "اتصال وواتساب لتقديم الطلب وإرسال تفاصيل موقعك بسهولة."],
];

const faqs = [
  ["هل تقدمون خدماتكم في مدينة الرياض؟", "نعم، خدمات الترميم والهدم والتكسير ورفع المخلفات موجهة لمدينة الرياض. أرسل موقع العمل للتأكد من تفاصيل الترتيب."],
  ["هل يمكن طلب خدمة رفع المخلفات فقط؟", "نعم، يمكنك طلب رفع مخلفات البناء أو الأنقاض كخدمة مستقلة مع توضيح الموقع وحجم العمل عند التواصل."],
  ["كيف أطلب معاينة أو عرض سعر؟", "اتصل مباشرة أو أرسل رسالة واتساب تتضمن نوع الخدمة والحي ووصفًا مختصرًا للعمل المطلوب."],
  ["هل تنفذون أعمال تكسير منفصلة؟", "نعم، يمكنك طلب أعمال التكسير والإزالة بشكل منفصل أو ضمن خدمة ترميم أو هدم حسب حالة موقعك."],
];

function ThemeButton({ href, children, kind = "primary", external = false }: { href: string; children: React.ReactNode; kind?: "primary" | "light" | "dark"; external?: boolean }) {
  return <a className={`bt-button bt-button-${kind}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}<span className="bt-button-icon"><ArrowLeft size={17} /></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = [
      "مرحبًا، أرغب في طلب خدمة من خدمات الترميم والهدم بالرياض.",
      `الاسم: ${form.get("name")}`,
      `رقم الجوال: ${form.get("phone")}`,
      `نوع الخدمة: ${form.get("service")}`,
      `الحي أو الموقع: ${form.get("location")}`,
      `تفاصيل الطلب: ${form.get("message")}`,
    ].join("\n");
    window.open(`${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bt-site" dir="rtl">
      <a className="bt-skip" href="#main">انتقل إلى المحتوى</a>
      <section className="bt-hero" id="الرئيسية">
        <img className="bt-hero-bg" src={themeAssets.hero} alt="مبانٍ حديثة وموقع إنشائي" />
        <div className="bt-hero-shade" />
        <header className="bt-header">
          <a className="bt-logo" href="#الرئيسية" aria-label="الصفحة الرئيسية">
            <span className="bt-logo-mark"><i /><i /><i /></span>
            <span>خدمات <b>الرياض</b><small>ترميم • هدم • مخلفات</small></span>
          </a>
          <button className="bt-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          <nav className={`bt-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            <a href="#عنّا" onClick={() => setMenuOpen(false)}>عنّا</a><a href="#الخدمات" onClick={() => setMenuOpen(false)}>الخدمات</a><a href="#مجالاتنا" onClick={() => setMenuOpen(false)}>مجالات العمل</a><a href="#الاسئلة" onClick={() => setMenuOpen(false)}>الأسئلة</a><a href="#تواصل" onClick={() => setMenuOpen(false)}>تواصل معنا</a>
          </nav>
          <a className="bt-header-contact" href={`tel:${PHONE}`}>اتصل الآن <Phone size={16} /></a>
        </header>
        <div className="bt-hero-content">
          <p className="bt-kicker bt-kicker-light">خدمات الترميم والهدم في الرياض</p>
          <h1>نرمّم ونَهدم<br />ونرفع المخلفات <em>باحترافية.</em></h1>
          <p>خدمات ميدانية للمباني والمنازل والمواقع؛ من أعمال الترميم والتكسير حتى رفع مخلفات البناء داخل مدينة الرياض.</p>
          <div className="bt-hero-actions"><ThemeButton href={WA} external>راسلنا عبر واتساب</ThemeButton><ThemeButton href="#الخدمات" kind="light">استعرض الخدمات</ThemeButton></div>
        </div>
        <a className="bt-scroll" href="#عنّا"><span>اسحب لاكتشاف خدماتنا</span><ArrowLeft size={18} /></a>
      </section>

      <main id="main">
        <section className="bt-section bt-about" id="عنّا">
          <div className="bt-about-art"><img src={themeAssets.about} alt="عمال يتابعون أعمال بناء وترميم" loading="lazy" /><span className="bt-about-circle" /><span className="bt-about-dots" /></div>
          <div className="bt-about-copy">
            <p className="bt-kicker">عن خدماتنا</p><h2>خدمات ميدانية تساعدك على <em>ترتيب موقعك.</em></h2>
            <p className="bt-copy">نعمل على تلبية احتياجات الترميم والهدم والتكسير ورفع المخلفات للمواقع داخل الرياض. يبدأ الطلب بوصف العمل وموقعه، ثم ننظم معك الخطوة التالية المناسبة.</p>
            <ul className="bt-check-list"><li><CheckCircle2 /> خدمات متنوعة للمباني والمنازل</li><li><CheckCircle2 /> ترتيب واضح حسب موقع العمل</li><li><CheckCircle2 /> تواصل مباشر عبر الاتصال وواتساب</li></ul>
            <div className="bt-about-bottom"><ThemeButton href="#تواصل">اطلب خدمة الآن</ThemeButton><a className="bt-call-block" href={`tel:${PHONE}`}><span><Phone size={20} /></span><small>اتصال مباشر</small><strong>{PHONE}</strong></a></div>
          </div>
        </section>

        <section className="bt-section bt-services" id="الخدمات">
          <div className="bt-heading-row"><div><p className="bt-kicker">خدماتنا</p><h2>خدمات البناء <em>والموقع</em></h2></div><p>اختر الخدمة التي تناسب احتياج موقعك، أو تواصل معنا إذا كان طلبك يتضمن أكثر من عمل.</p></div>
          <div className="bt-service-grid">
            {services.map(([title, text], index) => <article className="bt-service-card" key={title}><div className="bt-service-image"><img src={themeAssets.services[index]} alt={title} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></div><div className="bt-service-body"><h3>{title}</h3><p>{text}</p><a href="#تواصل">اطلب الخدمة <ArrowLeft size={17} /></a></div></article>)}
          </div>
          <div className="bt-center"><ThemeButton href="#تواصل">اطلب الخدمة المناسبة</ThemeButton></div>
        </section>

        <section className="bt-why" id="لماذا">
          <div className="bt-why-frame"><div className="bt-why-copy"><p className="bt-kicker bt-kicker-light">لماذا نحن؟</p><h2>تنظيم الموقع يبدأ من <em>تفاصيل طلبك.</em></h2><p>نستمع لما تحتاجه ونرتب مراحل التواصل والمعاينة أو التنفيذ حسب طبيعة العمل في موقعك.</p><div className="bt-benefits">{benefits.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div><div className="bt-why-images"><img src={themeAssets.why[0]} alt="تفاصيل عمل في موقع بناء" loading="lazy" /><img src={themeAssets.why[1]} alt="تجهيز موقع عمل" loading="lazy" /><img src={themeAssets.why[2]} alt="عامل في موقع بناء" loading="lazy" /></div></div>
        </section>

        <section className="bt-section bt-work" id="مجالاتنا">
          <div className="bt-heading-row"><div><p className="bt-kicker">مجالات العمل</p><h2>خدمات تعالج <em>احتياجات الموقع.</em></h2></div><p>نماذج توضيحية لطبيعة الخدمات التي يمكن ترتيبها وفقًا لمتطلبات موقعك داخل الرياض.</p></div>
          <div className="bt-work-grid">{["ترميم وتجديد", "هدم منظم", "تكسير وإزالة", "رفع مخلفات"].map((label, index) => <a className={`bt-work-card bt-work-${index + 1}`} href="#تواصل" key={label}><img src={themeAssets.projects[index]} alt={label} loading="lazy" /><span><small>خدمات الرياض</small><strong>{label}</strong><ArrowUpLeft size={20} /></span></a>)}</div>
        </section>

        <section className="bt-cta" style={{ backgroundImage: `url(${themeAssets.ctaBg})` }}><div className="bt-cta-inner"><div><p className="bt-kicker bt-kicker-light">ابدأ الآن</p><h2>لنرتب موقعك<br /><em>خطوة بخطوة.</em></h2><p>تواصل معنا وشاركنا نوع الخدمة والموقع المطلوب لنبدأ التنسيق.</p><ThemeButton href={WA} external>أرسل رسالة واتساب</ThemeButton></div><img src={themeAssets.ctaImg} alt="عامل يرتدي خوذة حماية" loading="lazy" /></div></section>

        <section className="bt-section bt-process"><div className="bt-heading-row"><div><p className="bt-kicker">طريقة العمل</p><h2>من طلبك إلى <em>ترتيب الموقع.</em></h2></div><p>خطوات عملية ومباشرة للتواصل وتحديد ما تحتاجه من خدمات للمباني أو موقع العمل.</p></div><div className="bt-process-grid">{[["01", "أرسل تفاصيلك", "اكتب نوع الخدمة والحي ووصف العمل المطلوب."], ["02", "نراجع الطلب", "نرتب معك التفاصيل والخطوة المناسبة للموقع."], ["03", "تنسيق العمل", "نحدد طريقة البدء حسب نطاق العمل المطلوب."], ["04", "ترتيب الموقع", "تُرفع المخلفات ضمن الطلب عند الاتفاق عليها."]].map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><ArrowLeft size={18} /></article>)}</div></section>

        <section className="bt-faq-section" id="الاسئلة" style={{ backgroundImage: `url(${themeAssets.faqBg})` }}><div className="bt-faq-inner"><div className="bt-faq-art"><img className="bt-faq-art-1" src={themeAssets.faq[0]} alt="تفاصيل موقع بناء" loading="lazy" /><img className="bt-faq-art-2" src={themeAssets.faq[1]} alt="عمال في موقع عمل" loading="lazy" /><img className="bt-faq-art-3" src={themeAssets.faq[2]} alt="معدات ضمن موقع بناء" loading="lazy" /><img className="bt-faq-art-4" src={themeAssets.faq[3]} alt="موقع منظم بعد التنفيذ" loading="lazy" /></div><div className="bt-faq-copy"><p className="bt-kicker">الأسئلة الشائعة</p><h2>لديك سؤال؟<br /><em>لدينا إجابة.</em></h2><p className="bt-copy">اطلع على الأسئلة المتكررة، أو تواصل معنا مباشرة إذا كان طلبك يحتاج إلى تفاصيل أكثر.</p><div className="bt-accordion">{faqs.map(([question, answer], index) => <article className={faqOpen === index ? "is-open" : ""} key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}>{question}<span><Plus size={18} /></span></button><div className="bt-answer"><p>{answer}</p></div></article>)}</div></div></div></section>

        <section className="bt-section bt-notes"><div className="bt-heading-row"><div><p className="bt-kicker">قبل البدء</p><h2>ملاحظات تساعد على <em>تجهيز الطلب.</em></h2></div><p>كلما كانت تفاصيل الموقع ونوع الخدمة أوضح، أصبح ترتيب الخطوات أسرع وأسهل.</p></div><div className="bt-note-grid"><article><span>01</span><h3>حدّد نوع الخدمة</h3><p>ترميم، هدم، تكسير، أو رفع مخلفات.</p></article><article><span>02</span><h3>اذكر موقع العمل</h3><p>أرسل اسم الحي أو موقع المبنى داخل الرياض.</p></article><article><span>03</span><h3>أضف وصفًا مختصرًا</h3><p>وضح المطلوب أو أرسل صورًا عبر واتساب.</p></article></div></section>

        <section className="bt-contact" id="تواصل"><div className="bt-contact-info"><div><p className="bt-kicker bt-kicker-light">تواصل معنا</p><h2>أرسل تفاصيلك<br />ونرتب <em>البداية.</em></h2><p>استخدم النموذج لإرسال طلبك مباشرة إلى واتساب، أو اتصل بنا الآن.</p><a href={`tel:${PHONE}`} className="bt-contact-phone"><Phone size={21} /><span><small>اتصال مباشر</small><strong>{PHONE}</strong></span></a></div><img src={themeAssets.contact} alt="عامل بناء يرتدي خوذة" loading="lazy" /></div><form className="bt-form" onSubmit={onFormSubmit}><div className="bt-form-row"><label>الاسم<input name="name" required placeholder="اكتب اسمك" /></label><label>رقم الجوال<input name="phone" required inputMode="tel" placeholder="05xxxxxxxx" /></label></div><div className="bt-form-row"><label>نوع الخدمة<select name="service" required defaultValue=""><option value="" disabled>اختر الخدمة</option><option>ترميم مبنى أو منزل</option><option>هدم مبنى</option><option>تكسير وإزالة</option><option>رفع مخلفات بناء</option><option>أكثر من خدمة</option></select></label><label>الحي أو الموقع<input name="location" required placeholder="مثال: حي العليا" /></label></div><label>تفاصيل الطلب<textarea name="message" required rows={5} placeholder="اكتب وصفًا مختصرًا للعمل المطلوب" /></label><button type="submit" className="bt-submit">أرسل الطلب عبر واتساب <Send size={17} /></button></form></section>
      </main>

      <footer className="bt-footer"><div className="bt-footer-main"><a className="bt-logo bt-footer-logo" href="#الرئيسية"><span className="bt-logo-mark"><i /><i /><i /></span><span>خدمات <b>الرياض</b><small>ترميم • هدم • مخلفات</small></span></a><p>خدمات ترميم المباني وهدمها وتكسيرها ورفع مخلفات البناء داخل مدينة الرياض.</p><div><h3>الخدمات</h3><a href="#الخدمات">ترميم المباني</a><a href="#الخدمات">هدم وتكسير</a><a href="#الخدمات">رفع المخلفات</a></div><div><h3>تواصل معنا</h3><a href={`tel:${PHONE}`} dir="ltr">{PHONE}</a><a href={WA} target="_blank" rel="noreferrer">واتساب</a><span>مدينة الرياض</span></div></div><div className="bt-footer-bottom"><span>© {new Date().getFullYear()} خدمات الرياض. جميع الحقوق محفوظة.</span><a href="#الرئيسية">العودة للأعلى <ArrowLeft size={15} /></a></div></footer>
      <div className="bt-floating"><a href={WA} target="_blank" rel="noreferrer" aria-label="واتساب"><MessageCircle size={22} /></a><a href={`tel:${PHONE}`} aria-label="اتصال"><Phone size={19} /></a></div>
    </div>
  );
}
