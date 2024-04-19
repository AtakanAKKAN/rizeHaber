import Hakkımızda from "./Pages/Hakkımızda";
import Hizmetlerimiz from "./Pages/Hizmetlerimiz";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SpecialNew from "./Pages/SpecialNew";

const App = () => {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="max-w-[2000px] mx-auto">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hakkımızda" element={<Hakkımızda />} />
        <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
        <Route path="/ankara-rize-günleri" element={<SpecialNew />} />
      </Routes>
    </div>
  );
};

export default App;
