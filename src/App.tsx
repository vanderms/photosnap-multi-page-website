import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { HomePage } from "./pages/homepage";
import { FeaturesPage } from "./pages/features-page";
import { PricingPage } from "./pages/pricing-page";
import { StoriesPage } from "./pages/stories-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/features" element={<FeaturesPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/stories" element={<StoriesPage />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
