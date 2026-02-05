import React, { useState } from "react";

// IdeaPad is the modal form used to add a new solution idea
function IdeaPad({ closeModal, addIdea }) {

  // State to store the idea title
  const [title, setTitle] = useState("");
  // State to store the idea description (actionable steps, requirements, income potential)
  const [description, setDescription] = useState("");

  // Function runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh

    // Validate that both fields are filled
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }

    // Call parent function to add a new idea
    addIdea(title, description);

    // Close the modal after adding the idea
    closeModal();
  };

  return (
    // Full-screen overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      {/* Modal container */}
      <div className="bg-white text-black p-8 rounded-xl w-full max-w-md">
        {/* Modal title */}
        <h2 className="text-xl font-bold mb-6">
          Share a Solution Idea
        </h2>

        {/* Form wrapper */}
        <form onSubmit={handleSubmit}>
          {/* Title label */}
          <label className="block text-sm font-medium mb-1">
            Idea Title
          </label>
          {/* Title input */}
          <input
            className="border p-2 w-full mb-4"
            value={title}
            placeholder="e.g., Home Cleaning Service"
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Description label */}
          <label className="block text-sm font-medium mb-1">
            Description & Action Plan
          </label>
          {/* Description textarea with guidance */}
          <textarea
            className="border p-2 w-full mb-4"
            rows={6}
            value={description}
            placeholder="Quick Steps:&#10;1. [First step]&#10;2. [Second step]&#10;3. [Third step]&#10;&#10;You'll Need:&#10;• [Item 1]&#10;• [Item 2]&#10;&#10;Potential Income: [Amount/timeframe]"
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Action buttons */}
          <div className="flex gap-4">
            {/* Cancel button closes modal */}
            <button
              type="button"
              onClick={closeModal}
              className="w-1/2 border border-gray-300 py-2 rounded-md"
            >
              Cancel
            </button>

            {/* Submit button adds the idea */}
            <button
              type="submit"
              className="w-1/2 bg-black text-white py-2 rounded-md"
            >
              Add Idea
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default IdeaPad;
