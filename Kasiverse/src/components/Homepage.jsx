import React from 'react'
import { Link } from 'react-router-dom';

function Homepage() {
    //cards data
    const cards = [
    {
      title: "Problems",
      description:
        "Share issues impacting your community",
        borderColor: "border-amber-800",
    },
    {
      title: "Ideas",
      description:
        "Explore solutions to tackle unemployment",  
        borderColor: "border-blue-800",
    },
    {
      title: "Marketplace",
      description:
        "Find and offer local services within your community",
        borderColor: "border-purple-800",
    },
];
  return (
    <div className="homepage">
       <div>
        <h1 className="text-6xl font-bold text-center pt-24 text-white">Kasiverse</h1>
        <div className="text-center text-white mt-4 mb-12 text-2xl font-semibold">
           <p className=" inline-block px-8 border-b">Empowering Communities, Solving Unemployment!</p>
        </div>
        <p className="text-center text-white mt-4">Join Kasiverse and help your community thrive! Post problems, share creative
        </p>
        <p className="text-center text-white mb-12">solutions, and find local services to create new opportunities for all</p>
      </div>
      <div className="px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center max-w-300 mx-auto">
        {cards.map((card, index) => (
  <div
    className={`card1 aspect-square w-70 rounded-2xl overflow-hidden 
                shadow-neutral-600 transition-all duration-300 hover:-translate-y-2
                border-4 ${card.borderColor}`}
    key={index}
  >
    <h3 className="text-xl text-white text-center font-bold mt-4">{card.title}</h3>
    <p className="text-sm px-4 my-2 text-white text-center font-bold">
      {card.description}
    </p>
  </div>
))}

      </div>
        </div>
        <div className="text-center text-white mb-12 font-semibold">
            <h1 className="text-2xl mb-4 inline-block px-8 border-b border-white">Together We Can Make a Difference!</h1>
        <p className="mb-4">Join Kasiverse, Helping Every Community, Everywhere!</p>
        {/* Action button */}
        <Link to="/problems">
        <button className="bg-linear-to-b from-green-500 via-emerald-500 to-teal-500 rounded-2xl px-6 py-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition duration-300 ease-out hover:-translate-y-1">Get Started Now!</button>
        </Link>
        </div>
        
    </div>
  )
}

export default Homepage