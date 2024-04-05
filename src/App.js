import ContactUs from "./Views/ContactUs/ContactUs";
import Cover from "./Views/Cover/Cover";
import FaithDeclaration from "./Views/FaithDeclaration/FaithDeclaration";
import JoinUs from "./Views/JoinUs/JoinUs";
import Pillars from "./Views/Pillars/Pillars";
import WellcomeVideo from "./Views/WellcomeVideo/WellcomeVideo";
import { LandingBlock } from "./sytle";


function App() {
  return (
    <div className="App">
      <LandingBlock>
        <section> <Cover/> </section>
        <section><WellcomeVideo/> </section>
        <section><JoinUs/> </section>
        <section><ContactUs/> </section>
        <section><FaithDeclaration/> </section>
        <section><Pillars/> </section>
      </LandingBlock>
    </div>
  );
}

export default App;
