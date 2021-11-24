import React from "react";
import { IdeasCollection } from "../../api/ideas/ideas";

export default DisplayIdea = ({ idea: { upVote, downVote, _id, idea } }) => {
  const handleUpVote = (id) => {
    IdeasCollection.update(id, { $inc: { upVote: 1 } }, (err, res) => {
      if (err) {
        console.log(err);
      }
    });
  };

  const handleDownVote = (id) => {
    IdeasCollection.update(id, { $inc: { downVote: 1 } }, (err, res) => {
      if (err) {
        console.log(err);
      }
    });
  };

  return (
    <div className="idea-container">
      <div className="idea-div">
        <p>{idea}</p>
      </div>

      <div className="idea-button">
        <div className="row-score">
          <p>{upVote}</p>
          <p>{downVote}</p>
        </div>
        <div className="div-vote" onClick={() => handleUpVote(_id)}>
          <img src="/images/Thumbs_Up.png" style={{ width: 40 + "px" }} />
        </div>

        <div className="div-vote" onClick={() => handleDownVote(_id)}>
          <img src="/images/Thumbs_Down.png" style={{ width: 40 + "px" }} />
        </div>
      </div>
    </div>
  );
};
