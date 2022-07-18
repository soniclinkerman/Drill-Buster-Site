import Head from "next/head";
import Section from "../components/Section";
import Card from "../components/Card";
import Header from "../components/Header";
import Spikes from "../components/Spikes";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Head>
        <title>Adventure Kitty - Drill Buster</title>
        <meta name="description" content="Adventure Kitty drill buster game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* About section */}
      <Section id="about" bgImage={"/assets/blue-skies-bg.png"} spikes="light">
        <h2 className="title">About title</h2>
        <div className="card-wrapper">
          <Card title={"A"} text="Hello"></Card>

          <div className="card">
            <div className="card__image">Card image</div>
            <div className="card__content">
              <h3 className="card__title">Card title</h3>
              <p className="card__summary">Card summary</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">Card image</div>
            <div className="card__content">
              <h3 className="card__title">Card title</h3>
              <p className="card__summary">Card summary</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">Card image</div>
            <div className="card__content">
              <h3 className="card__title">Card title</h3>
              <p className="card__summary">Card summary</p>
            </div>
          </div>
        </div>

        <Spikes light flip="v" />
      </Section>

      {/* Preview section */}
      <Section id="preview" bgImage={"/assets/cave-bg.png"}>
        <h2 className="title">Preview title</h2>

        <div className="card-wrapper">
          <div className="preview-card">preview image</div>
          <div className="preview-card preview-card--locked">
            preview locked
          </div>
          <div className="preview-card preview-card--locked">
            preview locked
          </div>
        </div>

        <form className="email-subscription">
          <label htmlFor="email">
            Subscribe to know when the next biome drops
          </label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>

        <Spikes />
      </Section>

      <Footer />
    </div>
  );
}
