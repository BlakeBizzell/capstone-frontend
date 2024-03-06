import Pricing from "./homePage/Pricing";
import Hero from "./homePage/Hero";
import Highlights from "./homePage/Highlights";
import FAQ from "./homePage/FAQ";
import Testimonials from "./homePage/Testimonials";

function Dashboard() {
  return (
    <div>
      <Hero />
      <Highlights />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
}

export default Dashboard;
