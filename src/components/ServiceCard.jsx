import React from 'react';

const ServiceCard = ({ name, price, image }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-cyan-400">{name}</h3>
                <p className="text-white">Precio: <span className="text-cyan-400">{price}</span></p>
            </div>
        </div>
    );
};

export default ServiceCard;