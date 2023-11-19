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
        <main className="my-[56px] space-y-4">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/subir-archivo" element={<Upload />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
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
