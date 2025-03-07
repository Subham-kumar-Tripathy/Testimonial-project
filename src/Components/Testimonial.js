import React, { useState } from "react";
import Card from "./Card";
import{FiChevronLeft ,FiChevronRight} from'react-icons/fi';
function Testimonial(props){
    let reviews=props.reviews;
    const [index,setindex]=useState(0);
    function firsthandler(){
        if(index-1 < 0){
            setindex(reviews.length-1);
        }
        else{
            setindex(index-1);
        }
    }
    function leftthandler(){
        if(index +1 >= reviews.length){
            setindex(0);
        }
        else{
            setindex(index+1);
        }
    }
    function surprisehandler(){
        const rannum=Math.floor(Math.random()*reviews.length);
        setindex(rannum);
    }

    return(
        <div className="w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col items-center justify-center mt-10 p-10  transition-all duration-700 hover:shadow-xl">
            <Card reviews={reviews[index]}></Card>
            <div className="flex text-3xl mt-9 gap-3 text-pink-400 font-bold mx-auto">
                    <button
                    onClick={firsthandler}
                     className="cursor-pointer hover:text-pink-500">
                        <FiChevronLeft/>
                    </button>
                    <button
                    onClick={leftthandler}
                     className="cursor-pointer hover:text-pink-500">
                        <FiChevronRight/>
                    </button>
            </div>
            <div className="mt-6">
                    <button
                    onClick={surprisehandler}
                     className="bg-pink-400 hover:bg-pink-500  transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                        Surprise Me</button>
            </div>
        </div>
    )
}
export default Testimonial;