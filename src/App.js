import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./Fetch/posts";

const APP = () => {
  return (
    <div className="app">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts/>} />
      
      </Routes>
    </BrowserRouter>
      
    </div>
    );
}
 
export default APP;