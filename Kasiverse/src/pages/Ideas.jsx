import React, { useState } from "react";
// search icon
import { Search } from "lucide-react";

// components
import IdeaPanel from "../components/IdeaPanel";
import IdeaPad from "../components/IdeaPad";
import Navbar from "../components/Navbar.jsx";

// Ideas page component
function Ideas() {

  // State holding all ideas (static + user-added)
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: "Affordable Tutoring Service",
      description:
        "Quick Steps:\n1. Find a safe space (home, church hall, community center)\n2. Choose grade levels you can teach (Grade 1–7 works well)\n3. Set affordable rates (R150–R250 per child per month)\n\nYou'll Need:\n• Basic stationery\n• Study space\n• Textbooks or workbooks\n• Snacks (optional)\n\nPotential Income: R750–R2500 per month with 5–10 students.",
    },
    {
      id: 2,
      title: "Transport & Delivery Service",
      description:
        "Quick Steps:\n1. Partner with a local minibus owner or use own vehicle\n2. Advertise on community boards and social media\n3. Start with small deliveries (groceries, parcels)\n\nYou'll Need:\n• Vehicle (own or partnership)\n• Basic fuel budget\n• Phone for bookings\n• Insurance (optional but recommended)\n\nPotential Income: R30–R100 per trip, 5–10 trips daily.",
    },
    {
      id: 3,
      title: "Community Fitness Classes",
      description:
        "Quick Steps:\n1. Identify an outdoor space (park, open field, schoolyard)\n2. Train in yoga, aerobics, or dance basics online\n3. Charge R20–R50 per session\n\nYou'll Need:\n• Open space\n• Basic workout mat or space\n• Phone for scheduling\n• Motivation and consistency\n\nPotential Income: R200–R500 per class with 10–25 participants.",
    },
    {
      id: 4,
      title: "Home Cleaning Service",
      description:
        "Quick Steps:\n1. Start with neighbors and friends\n2. Offer weekly or monthly cleaning packages\n3. Set rates: R150–R300 per home visit\n\nYou'll Need:\n• Basic cleaning supplies (mops, cloths, detergent)\n• Reliable transport\n• Phone for bookings\n• Protective gloves\n\nPotential Income: R1500–R3000 per month with 5–10 regular clients.",
    },
    {
      id: 5,
      title: "Waste Recycling Initiative",
      description:
        "Quick Steps:\n1. Collect recyclables (plastic, glass, cardboard) from community\n2. Sort and store in designated area\n3. Sell to recycling centers (R1–R5 per kg)\n\nYou'll Need:\n• Collection bags/containers\n• Transport (trolley or cart)\n• Storage space\n• Partnerships with recycling buyers\n\nPotential Income: R500–R2000 per month depending on volume.",
    },
  ]);

  // State for search input value
  const [searchTerm, setSearchTerm] = useState("");
  // State controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to add a new idea
  const addIdea = (title, description) => {
    const newIdea = {
      id: Date.now(), // Temporary unique ID
      title,
      description,
    };

    // Add the new idea to the top of the list
    setIdeas((prevIdeas) => [newIdea, ...prevIdeas]);
  };

  // Function to delete an idea (Mock)
  const deleteIdea = (id) => {
    if (window.confirm("Are you sure you want to delete this idea?")) {
      setIdeas((prevIdeas) => prevIdeas.filter((idea) => idea.id !== id));
    }
  };

  // Function to update an idea (Mock)
  const updateIdea = (id, updatedData) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) => (idea.id === id ? { ...idea, ...updatedData } : idea))
    );
  };

  // Filter ideas based on search input
  const filteredIdeas = ideas.filter((idea) => {
    const query = searchTerm.toLowerCase();

    return (
      idea.title.toLowerCase().includes(query) ||
      idea.description.toLowerCase().includes(query)
    );
  });

  return (
    // Page container
    <div>
      <Navbar />
      <div className="min-h-screen bg-linear-to-l from-purple-800 via-black to-purple-900 px-8 pt-24 pb-8">
        {/* Page title */}

        <h1 className=" text-3xl font-bold text-white mb-1">
          Solution Ideas & Opportunities
        </h1>
        {/* Subtitle */}
        <p className="text-gray-300 mb-6">
          Discover and share practical business ideas to build income and impact.
        </p>


        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 ">
          {/* Search input */}
          <div className="flex items-center bg-white/80 gap-2 w-full max-w-auto px-12 py-3 rounded-md">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full  text-sm"
            />
          </div>

          {/* Add idea button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-linear-to-l from-purple-800 via-black to-purple-900 text-white w-40 px-4 py-3  rounded-md transition duration-300 ease-out"
          >
            + Add Idea
          </button>

        </div>


        {/* Ideas grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-3 mt-8 max-w-8xl mx-auto">
          {filteredIdeas.map((idea) => (
            <IdeaPanel
              key={idea.id}
              idea={idea}
              onDelete={deleteIdea}
              onUpdate={updateIdea}
            />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <IdeaPad
            closeModal={() => setIsModalOpen(false)}
            addIdea={addIdea}
          />
        )}
      </div>

    </div>
  );
}

export default Ideas;
