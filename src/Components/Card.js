import React from "react";
import{FaQuoteLeft ,FaQuoteRight} from'react-icons/fa';
function Card(props){
    let reviews=props.reviews;
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto ">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25"
                src={reviews.image}/>
                <div className="w-[140px] h-[140px] bg-red-500 rounded-full absolute top-[-6px] z-[-10] left-[-10px]"></div>
            </div>
            <div className="text-center mt-7">
                <p className="font-bold tracking-wider capitalize text-2xl">{reviews.name}</p>
            </div>
            <div className="text-center mt-1"> 
                <p className="text-pink-300 uppercase text-sm">{reviews.job}</p>
            </div>
            <div className=" text-pink-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>
            <div className="text-center mt-4 text-slate-500">
                <p>{reviews.text}</p>
            </div>
            <div className=" text-pink-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
        </div>
    )
}
export default Card