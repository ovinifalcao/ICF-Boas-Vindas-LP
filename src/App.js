import Calendar from "./Views/Calendar/Calendar";
import ContactUs from "./Views/ContactUs/ContactUs";
import Cover from "./Views/Cover/Cover";
import FaithDeclaration from "./Views/FaithDeclaration/FaithDeclaration";
import JoinUs from "./Views/JoinUs/JoinUs";
import OurStructure from "./Views/OurStructure/OurStructure";
import Pillars from "./Views/Pillars/Pillars";
import Signature from "./Views/Signture/Signature";
import WellcomeVideo from "./Views/WellcomeVideo/WellcomeVideo";
import Desktop from "./Views/Desktop/desktop";
import { LandingBlock } from "./sytle";
import VisiteYou from "./Views/VisiteYou/VisiteYou";


function App() {

  const isExpectedViewPort = document.documentElement.clientWidth <= 800;

  return (
    <div className="App">
      {isExpectedViewPort ?
        <LandingBlock>
          <section> <Cover/> </section>
          <section><WellcomeVideo/> </section>
          <section><JoinUs/> </section>
          <section><ContactUs/> </section>
          <section><VisiteYou/> </section>
          <section><Calendar/> </section>
          <section><FaithDeclaration/> </section>
          <section><Pillars/> </section>
          <section><OurStructure/> </section>
          <section><Signature/> </section>
        </LandingBlock>
        :<Desktop/>}
    </div>
  );
}

export default App;
