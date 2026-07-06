import Hero from "../../components/Home/Hero";
import Companies from "../../components/Home/Companies";
import FeaturedJobs from "../../components/Home/FeaturedJobs";
import Categories from "../../components/Home/Categories";
import WhyChoose from "../../components/Home/WhyChoose";
import HowItWorks from "../../components/Home/HowItWorks"
import CTA from "../../components/Home/CTA"


function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <FeaturedJobs/>
      <Categories/>
      <WhyChoose/>
      <HowItWorks/>
      <CTA/>
    </>
  );
}

export default Home;