import OurProducts from "../components/OurProducts";
import Jumbotron from "../components/Jumbotron";
import AboutUs from "../components/AboutUs";
import WelcomePopup from "../components/WelcomePopup";

export default function Homepage() {
  return (
    <>
      <WelcomePopup />
      <div>
        <Jumbotron />
        <OurProducts />
        <AboutUs />
      </div>
    </>
  );
}
