import { useEffect, useState } from "react";

import PageNav from "./PageNav";
import StartPage from "./StartPage";

function Hero() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hero vh-100" id="hero">
      {visible && <StartPage visible={visible} />}
      <PageNav />
      <h1>Jennifer Braunbarth</h1>
      <h2>Frontend Developer</h2>
      <img src="" alt="img" />
    </div>
  );
}

export default Hero;
