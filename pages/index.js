import Head from "next/head";
import Section from "../components/Section";
import Card from "../components/Card";
import Header from "../components/Header";
import Spikes from "../components/Spikes";
import Footer from "../components/Footer";
import Form from "../components/Form";
import CustomForm from "../components/CustomForm";
import ImageSection from "../components/Image";
import groundImage from "../public/assets/AdventureKitty_Logo.png";
import NewsLetterSignUpForm from "../components/NewsletterSignupForm";
import CardLayout from "../components/CardLayout";
export default function Home() {
  return (
    <div className="homepage">
      <Head>
        <title>Adventure Kitty - Drill Buster</title>
        <meta name="description" content="Adventure Kitty drill buster game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header text="Download Now" />

      {/* About section */}
      <Section id="about" bgImage={"/assets/blue-skies-bg.png"} spikes="light">
        <div className="about-wrapper">
          <div className="about-line"></div>
          <h2 className="title">Go For Gold</h2>
          <div className="about-line"></div>
        </div>

        <CardLayout />

        <Spikes light flip="v" />
      </Section>

      {/* Preview section */}
      <Section id="preview" bgImage={"/assets/cave-bg.png"}>
        <h2 className="title title-small">More To Come...</h2>

        <div className="card-wrapper image-container">
          <ImageSection
            imageUrl={"/assets/cave-bg.png"}
            text={"Ground Biome"}
            isLocked={false}
          />
          <ImageSection
            // imageUrl={"/assets/cave-bg.png"}
            // text={"Ground Biome"}
            icon={"/assets/lock-icon.png"}
            isLocked
          />

          <ImageSection
            // imageUrl={"/assets/cave-bg.png"}
            // text={"Ground Biome"}
            icon={"/assets/lock-icon.png"}
            isLocked
          />
        </div>

        <NewsLetterSignUpForm />

        {/* <CustomForm /> */}

        {/* <form className="email-subscription">
          <label htmlFor="email">
            Subscribe to know when the next biome drops
          </label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form> */}

        <Spikes flip="z" />
      </Section>

      <Footer />
    </div>
  );
}
