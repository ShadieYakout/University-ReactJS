import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import FirstNav from './Components/FirstNav';
import SecondNav from './Components/SecondNav';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import FourthSection from './Components/FourthSection';
import FifthSecion from './Components/FifthSecion';
import SixthSection from './Components/SixthSection';

function App() {
  return (
    <div className="appName">
      <FirstNav />
      <SecondNav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSecion />
      <SixthSection />
    </div>
  );
}

export default App;
