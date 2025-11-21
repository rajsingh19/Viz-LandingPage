import { useRef, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Homesection from "./components/Homesection";
import Navbar from "./components/Navbar";
import VizzlePage from "./components/VizzlePage";
import VizzlePage2 from "./components/VizzlePage2";
import Text from "./components/Text";


function AppLayout() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const launchingRef = useRef(null);
  const aboutRef = useRef(null);
  const VizzlePageRef = useRef(null);
  const VizzlePage2Ref = useRef(null);
  const TextRef = useRef(null);

  return (
    <div>
      <Navbar launchingRef={launchingRef} setIsFormOpen={setIsFormOpen} />
      <Homesection
        launchingRef={launchingRef}
        VizzlePageRef={VizzlePageRef}
        aboutRef={aboutRef}
        setIsFormOpen={setIsFormOpen}
      />
      <div ref={VizzlePageRef}>
        <VizzlePage />
      </div>

      <div ref={VizzlePage2Ref}>
        <VizzlePage2 />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={TextRef}>
        <Text />
      </div>
      
      <Footer />
    </div>
  );
}

export default AppLayout;
