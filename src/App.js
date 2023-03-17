import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FeedbackForm from "./components/FeedbackForm";
import Feedbacks from "./components/Feedbacks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/givefeedback" element={<FeedbackForm />} exact></Route>
        <Route path="/feedbacks" element={<Feedbacks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
