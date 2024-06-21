import React from "react";

const Card = ({ props }) => {

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:mx-16 my-6 `}>
            {props.map((event) => (
                <div
                    key={event.id}
                    className="max-w-sm p-2 border border-gray-200 rounded-lg shadow relative transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#49904d85] hover:cursor-pointer"
                >
                    <div>
                        {event.tag && <label className="absolute top-3 right-2 bg-[#49904d85] text-white px-2 py-1 text-xs rounded-lg">{event.tag}</label>}
                        <img className="rounded-lg" src={event.image} alt={event.name} />
                    </div>
                    <div className="p-5">
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
                            {event.name}
                        </h5>
                        <p className="mb-6 text-xs text-gray-700">
                            {event.description}
                        </p>
                        <div className="flex flex-wrap justify-between items-center">
                            <span className="text-gray-800 text-xs">
                                Date: {event.date}
                            </span>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
