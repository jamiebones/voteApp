import React, { useState } from "react";
import { IdeasCollection } from "../../api/ideas/ideas";

export default SaveIdeas = () => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (idea.length > 10) {
      IdeasCollection.insert(
        { idea: idea, upVote: 0, downVote: 0 },
        (err, ideaId) => {
          if (err) {
            alert(err);
          } else {
            alert(ideaId);
          }
        }
      );
      setIdea("");
    } else {
      alert("Idea must be at least 10 characters long");
    }
  };

  return (
    <div>
      <textarea
        id="idea"
        name="idea"
        value={idea}
        cols="60"
        rows="10"
        onChange={(event) => setIdea(event.target.value)}
        placeholder="Enter your idea here..."
      ></textarea>
      <br />
      <button
        onClick={handleSubmit}
        id="saveIdea"
        style={{ padding: 15 + "px", fontSize: 20 + "px" }}
        className="btn btn-primary"
      >
        Save Idea
      </button>
    </div>
  );
};
