import { BrowserRouter, Routes, Route } from "react-router-dom";
import GradientGenerator from "./pages/GradientGenerator";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GradientGenerator />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
