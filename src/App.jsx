import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Upload from "./pages/Upload";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/subir-archivo" element={<Upload />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

// function Navigation() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/">Upload</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default App;
