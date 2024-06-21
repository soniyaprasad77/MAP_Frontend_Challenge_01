import React from "react";

function ShimmerUI() {
return (
    <>
        <div className="shimmer-button "></div>
        <div className="Shimmer-Container flex flex-wrap">
            {Array(20).fill().map((_, index) => (
                <div key={index} className="shimmer-card bg-gray-200 w-[270px] h-[400px] m-4 rounded-xl"></div>
            ))}
        </div>
    </>
);
}

export default ShimmerUI;