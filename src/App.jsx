<<<<<<< HEAD
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> refs/remotes/origin/main
  );
}

export default App;
