import Pricing from "./homePage/Pricing";
import Hero from "./homePage/Hero";
import Highlights from "./homePage/Highlights";
import FAQ from "./homePage/FAQ";

function Dashboard() {
  return (
    <div>
      <Hero />
      <Highlights />
      <Pricing />
      <FAQ />
    </div>
  );
}

export default Dashboard;
