import Jumbotron from './components/Jumbotron';
import myImage from './assets/'
function App() {
  return (
    <>
      <div>Ciao
        <Jumbotron
          title="Minimal Luxury for Inner Balance"
          subtitle="two colors one balance"
          imgSrc={myImage}
        
        />
      </div>
      
    </>
  );
}

export default App;
