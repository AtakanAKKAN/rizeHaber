import Hakkımızda from "./Pages/Hakkımızda";
import Hizmetlerimiz from "./Pages/Hizmetlerimiz";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="max-w-[2000px] mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkımızda" element={<Hakkımızda />} />
        <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
      </Routes>
    </div>
  );
};

export default App;
