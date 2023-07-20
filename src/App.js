import React from "react";
import LoadingScreen from "./LoadingScreen";
import "./LoadingScreen.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";

// const App = () => {
//   return (
//     <Router>
//       <div>
//    <LoadingScreen />
//         <Routes>
//           <Route path="/" element={<LoadingScreen />} />
//           <Route path="/main" element={<MainPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };
// export default App;
const App = () => {
  return (
    <Router>
      <div>
        <LoadingScreen />
        <Routes>
          <Route path="/" element={<LoadingScreen />} index />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;