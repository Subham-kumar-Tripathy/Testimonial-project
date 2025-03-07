import React from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial";
import Card from "./Components/Card";
const App = () => {
  return(
    <div className="flex justify-center items-center flex-col w-[100vw] h-[100vh] bg-gray-200">
      <div className="text-center">
      <h1 className="text-4xl font-bold">YOur Testimonal</h1>
      <div className="bg-pink-400 h-[4px] w-1/5 mx-auto mt-1"></div>
      <Testimonial reviews={reviews}/>
      </div>
    </div>
    
  );
};

export default App;
