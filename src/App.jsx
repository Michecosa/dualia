import Jumbotron from './components/Jumbotron';
import myImage from './assets/jumbotron_image.jpeg'
function App() {
  return (
    <>
      <div>Ciao
        <Jumbotron
          title="Minimal Luxury for Inner Balance"
          subtitle="two colors one balance"
          imageSrc={myImage}
          imageAlt="Dualia Background"
        />
      </div>

    </>
  );
}

export default App;
