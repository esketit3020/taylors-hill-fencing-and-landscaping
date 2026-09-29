import heroLatest0 from '@/lib/hero-latest-0';
import heroLatest1 from '@/lib/hero-latest-1';
import heroLatest2 from '@/lib/hero-latest-2';
import heroLatest3 from '@/lib/hero-latest-3';
import Header from '@/components/header';
import QuoteForm from '@/components/quote-form';
import ServiceLink from '@/components/service-link';

const heroImage = `data:image/jpeg;base64,${heroLatest0}${heroLatest1}${heroLatest2}${heroLatest3}`;

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Taylors Hill Fencing and Landscaping',
  telephone: '+61402064931',
  email: 'thefence@y7mail.com',
  areaServed: ['Taylors Hill', 'Melbourne western suburbs'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Taylors Hill',
    addressRegion: 'VIC',
    postalCode: '3037',
    addressCountry: 'AU',
  },
  sameAs: [
    'https://www.facebook.com/p/Taylors-Hill-Fencing-and-Landscaping-100063705425533/',
  ],
};

const services = [
  {
    number: '01',
    title: 'Timber fencing',
    copy: 'Privacy, boundary and feature fencing for homes across Taylors Hill and nearby suburbs.',
    service: 'Timber fencing',
  },
  {
    number: '02',
    title: 'Steel & aluminium',
    copy: 'Durable, low-maintenance fencing with clean lines and practical finishes.',
    service: 'Steel or aluminium fencing',
  },
  {
    number: '03',
    title: 'Gates & access',
    copy: 'Pedestrian and driveway access that works with your fence, property and day-to-day use.',
    service: 'Gates',
  },
  {
    number: '04',
    title: 'Landscaping',
    copy: 'Outdoor improvements that help the fence, garden and usable space feel like one finished job.',
    service: 'Landscaping',
  },
];

const areas = ['Taylors Hill', 'Hillside', 'Delahey', 'Burnside Heights', 'Caroline Springs', 'Keilor Downs'];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, '\\u003c') }}
      />

      <a className="skip-link" href="#main">Skip to content</a>
      <div className="topbar">
        <span>LOCAL FENCING & LANDSCAPING · TAYLORS HILL</span>
        <a href="tel:+61402064931">Call 0402 064 931</a>
      </div>
      <Header />

      <main id="main">
        <section className="hero">
          <div className="hero__copy">
            <p className="eyebrow">FENCING & OUTDOOR WORK · MELBOURNE WEST</p>
            <h1>Make the outside of your home feel <em>finished.</em></h1>
            <p className="hero__lead">
              Fencing, gates and landscaping for homeowners who want a cleaner boundary,
              more privacy and an outdoor space that works properly.
            </p>
            <div className="hero__actions">
              <a className="button button--accent" href="#contact">Get a free quote</a>
              <a className="phone-link" href="tel:+61402064931">0402 064 931</a>
            </div>
            <div className="hero__proof">
              <div><strong>Local</strong><span>Based in Taylors Hill</span></div>
              <div><strong>Residential</strong><span>Fences, gates & outdoor work</span></div>
              <div><strong>Simple</strong><span>Send photos to get started</span></div>
            </div>
          </div>

          <div className="hero__media">
            <img
              src={heroImage}
              alt="Timber slat fence screening in front of a modern brick home at sunset"
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero__scrim" />
            <div className="hero__caption">
              <span>FENCING · GATES · LANDSCAPING</span>
              <strong>Built around your home.</strong>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Business highlights">
          <span>Domestic fencing</span><i>•</i>
          <span>Timber</span><i>•</i>
          <span>Steel & aluminium</span><i>•</i>
          <span>Gates</span><i>•</i>
          <span>Landscaping</span>
        </section>

        <section id="services" className="section services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>One local team for the boundary and the backyard.</h2>
            </div>
            <p>
              No need to overcomplicate it. Tell us what you want changed and we’ll talk through the
              practical options for the property.
            </p>
          </div>

          <div className="service-grid">
            {services.map((item) => (
              <article className="service-card" key={item.number}>
                <span className="service-card__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ServiceLink service={item.service}>Ask about {item.title.toLowerCase()} →</ServiceLink>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section work">
          <div className="work__intro">
            <p className="eyebrow">RECENT WORK</p>
            <h2>See the jobs, not just the sales pitch.</h2>
            <p>
              The business regularly shares project photos on Facebook. Open the project links below
              to see work posted by Taylors Hill Fencing and Landscaping.
            </p>
            <a
              className="text-link"
              href="https://www.facebook.com/p/Taylors-Hill-Fencing-and-Landscaping-100063705425533/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Facebook page →
            </a>
          </div>

          <div className="project-stack">
            <a
              className="project-card project-card--timber"
              href="https://www.facebook.com/100063705425533/photos/merbau-screen-fencework-in-progress/1972019679487457/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-card__index">01</span>
              <div>
                <span className="project-card__meta">PROJECT POST · FACEBOOK</span>
                <h3>Merbau screen fence</h3>
                <p>Work-in-progress project shared by the team.</p>
              </div>
              <span className="project-card__arrow" aria-hidden="true">↗</span>
            </a>
            <a
              className="project-card project-card--green"
              href="https://www.facebook.com/100063705425533/photos/1394045129395655/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-card__index">02</span>
              <div>
                <span className="project-card__meta">PROJECT POST · FACEBOOK</span>
                <h3>More work from the team</h3>
                <p>Another job posted directly to the business Facebook page.</p>
              </div>
              <span className="project-card__arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about__title">
            <p className="eyebrow">LOCAL MATTERS</p>
            <h2>A fence is part of the home, not an afterthought.</h2>
          </div>
          <div className="about__copy">
            <p className="lead-copy">
              Taylors Hill Fencing and Landscaping services Taylors Hill and surrounding areas with
              domestic fencing, gates and outdoor work.
            </p>
            <p>
              Whether you need more privacy, a cleaner street frontage or a practical gate, the first
              step is simple: send through the suburb, a few photos and what you want done.
            </p>
            <div className="area-box">
              <span className="area-box__pin" aria-hidden="true">⌖</span>
              <div>
                <strong>Local service area</strong>
                <div className="area-chips">
                  {areas.map((area) => <span key={area}>{area}</span>)}
                </div>
                <p>Nearby suburb not listed? Ask and we’ll confirm.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section process">
          <div className="section-heading section-heading--light">
            <div>
              <p className="eyebrow">HOW TO GET STARTED</p>
              <h2>From “we need a new fence” to a clear next step.</h2>
            </div>
          </div>
          <div className="steps">
            <article><span>01</span><h3>Send the basics</h3><p>Your suburb, photos, rough measurements and the type of work you’re considering.</p></article>
            <article><span>02</span><h3>Talk through the job</h3><p>We’ll discuss materials, access, existing fencing and what needs to happen next.</p></article>
            <article><span>03</span><h3>Get the quote</h3><p>Once the scope is clear, you can decide whether the job and timing suit you.</p></article>
          </div>
        </section>

        <section className="section faq">
          <div>
            <p className="eyebrow">COMMON QUESTIONS</p>
            <h2>Before you enquire.</h2>
          </div>
          <div className="questions">
            <details>
              <summary>What fencing do you work with?</summary>
              <p>Domestic timber, steel and aluminium fencing, plus gates. Send a photo if you’re unsure what material or style you currently have.</p>
            </details>
            <details>
              <summary>Do you work outside Taylors Hill?</summary>
              <p>Yes, the business services Taylors Hill and surrounding areas. Include your suburb in the enquiry so the location can be confirmed.</p>
            </details>
            <details>
              <summary>What helps with an accurate quote?</summary>
              <p>Photos, approximate fence length, your suburb, access details and whether an old fence needs to be considered are all useful.</p>
            </details>
            <details>
              <summary>Can I text photos?</summary>
              <p>Yes. Text the business on <a href="sms:+61402064931">0402 064 931</a> with a short description of the job.</p>
            </details>
          </div>
        </section>

        <section id="contact" className="section quote">
          <div className="quote__copy">
            <p className="eyebrow">GET A QUOTE</p>
            <h2>Tell us what you want done.</h2>
            <p>
              Send the details now, or call if it’s easier to explain the job over the phone.
            </p>
            <a className="quote__phone" href="tel:+61402064931">0402 064 931</a>
            <a className="quote__email" href="mailto:thefence@y7mail.com">thefence@y7mail.com</a>
            <div className="quote__links">
              <a href="sms:+61402064931">Send a text</a>
              <a
                href="https://www.facebook.com/p/Taylors-Hill-Fencing-and-Landscaping-100063705425533/"
                target="_blank"
                rel="noopener noreferrer"
              >Facebook</a>
            </div>
          </div>
          <QuoteForm />
        </section>
      </main>

      <footer>
        <a className="brand" href="#" aria-label="Back to top">
          <span className="brand__mark" aria-hidden="true">TH</span>
          <span className="brand__text">TAYLORS HILL<small>FENCING & LANDSCAPING</small></span>
        </a>
        <p>Fencing, gates and landscaping in Melbourne’s west.</p>
        <span>© {new Date().getFullYear()} Taylors Hill Fencing and Landscaping</span>
      </footer>

      <div className="mobile-cta">
        <a href="tel:+61402064931">Call now</a>
        <a href="#contact">Get a quote</a>
      </div>
    </>
  );
}
