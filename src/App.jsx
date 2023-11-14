import { useState } from "react";
import Footer from "./components/Footer";
import WatchDriver from "./components/WatchDriver";

function App() {
  const [drowsinessAlerts, setDrowsinessAlerts] = useState([]);

  return (
    <>
      <main>
        <WatchDriver />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
