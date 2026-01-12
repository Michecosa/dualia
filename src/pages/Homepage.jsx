import OurProducts from "../components/OurProducts";
import Jumbotron from "../components/Jumbotron";
import AboutUs from "../components/AboutUs";
export default function Homepage() {
  return (
    <>
      <div>
        <Jumbotron />
        <OurProducts />
        <AboutUs />
      </div>
    </>
  );
}
