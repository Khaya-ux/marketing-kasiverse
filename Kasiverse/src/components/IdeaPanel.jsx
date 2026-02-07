import React, { useState } from "react";
import { Lightbulb, Edit2, Trash2 } from "lucide-react";
import { useAuth } from "../context/ContextProvider";

// IdeaPanel displays a single solution idea card
function IdeaPanel({ idea, onDelete, onUpdate }) {
  const { user } = useAuth();
  const isAdmin = user?.user_metadata?.role?.toUpperCase() === 'ADMIN';
  const canEdit = isAdmin;

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: idea.title || "",
    description: idea.description || "",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      title: idea.title || "",
      description: idea.description || "",
    });
  };

  const handleSave = () => {
    if (!editData.title.trim() || !editData.description.trim()) {
      alert("All fields are required");
      return;
    }
    onUpdate(idea.id, editData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-white p-5 border border-gray-300 rounded-lg shadow-2xl flex flex-col transition duration-300 ease-out max-w-sm w-full">
        <h3 className="text-lg font-semibold text-black mb-4">Edit Idea</h3>

        <div className="flex flex-col gap-3 flex-1">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Title</label>
            <input
              type="text"
              value={editData.title}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Description</label>
            <textarea
              value={editData.description}
              onChange={(e) => setEditData({ ...editData, description: e.target.value })}
              rows={5}
              className="w-full border border-gray-300 p-2 rounded text-black"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleCancel}
            className="flex-1 border border-gray-300 py-2 rounded-md text-black hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    // Card container
    <div className="bg-white p-5 border border-gray-300 rounded-lg shadow-2xl flex flex-col transition duration-300 ease-out hover:-translate-y-1
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] max-w-sm w-full ">

      {/* Idea title with lightbulb icon */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-start gap-2">
          <Lightbulb size={18} className="text-yellow-500 flex-shrink-0 mt-1" />
          <h3 className="text-lg font-semibold text-black">
            {idea.title}
          </h3>
        </div>

        {canEdit && (
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="p-1 text-blue-600 hover:bg-blue-100 rounded transition"
              title="Edit idea"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => onDelete(idea.id)}
              className="p-1 text-red-600 hover:bg-red-100 rounded transition"
              title="Delete idea"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Idea description - actionable content */}
      <p className="text-sm text-black whitespace-pre-wrap flex-grow">
        {idea.description}
      </p>

    </div>
  );
}

export default IdeaPanel;
