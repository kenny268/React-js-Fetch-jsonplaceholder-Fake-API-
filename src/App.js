import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./Fetch/comments";
import Posts from "./Fetch/posts";

const APP = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="/comments" element={<Comments/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
    );
}
 
export default APP;