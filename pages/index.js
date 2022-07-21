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
        <div className="about-wrapper">
          <div className="about-line"></div>
          <h2 className="title">Go For Gold</h2>
          <div className="about-line"></div>
        </div>

        <div className="card-wrapper">
          <Card
            title={"TEST YOUR RISK/REWARD SKILLS"}
            image="/assets/screenshot-2.png"
            text="Collect coins to break barriers which allow you to progress in your journey. Will you take the safe route and get the bare minimum, or the risky route with a higher reward, but chance of losing it all?"
          />

          <Card
            title={"EXPLORE NEW TERRAINS"}
            image="/assets/screenshot-3.png"
            text="Uncover unique environments filled with secrets as you encounter mischievious enemies and challenging puzzles on your mission to collect the element found within each biome."
            isOnLeft={true}
            className="card-reverse"
          />

          <Card
            title={"ADAPT AND OVERCOME"}
            image="/assets/screenshot-1.png"
            text="Use quick decision making to adapt from your original plan when found in a sticky situation or see a golden oppurunity to get more than what you came for."
          />
        </div>
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

        <CustomForm />

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
