import React from "react";
import { Lightbulb } from "lucide-react";

// IdeaPanel displays a single solution idea card
function IdeaPanel({ idea }) {
  return (
    // Card container
    <div className="bg-white p-5 border border-gray-300 rounded-lg shadow-2xl flex flex-col transition duration-300 ease-out hover:-translate-y-1
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] max-w-sm w-full ">

      {/* Idea title with lightbulb icon */}
      <div className="flex items-start gap-2 mb-2">
        <Lightbulb size={18} className="text-yellow-500 flex-shrink-0 mt-1" />
        <h3 className="text-lg font-semibold text-black">
          {idea.title}
        </h3>
      </div>

      {/* Idea description - actionable content */}
      <p className="text-sm text-black whitespace-pre-wrap flex-grow">
        {idea.description}
      </p>

    </div>
  );
}

export default IdeaPanel;
