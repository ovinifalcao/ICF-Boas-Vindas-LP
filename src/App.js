import ContactUs from "./Views/ContactUs/ContactUs";
import Cover from "./Views/Cover/Cover";
import JoinUs from "./Views/JoinUs/JoinUs";
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
      </LandingBlock>
    </div>
  );
}

export default App;
