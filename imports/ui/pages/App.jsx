import React from "react";
import SaveIdea from "../components/SaveIdeas";
import "./styles.css";
import DisplayIdea from "../components/DisplayIdea";
import { IdeasCollection } from "../../api/ideas/ideas";
import { useTracker } from "meteor/react-meteor-data";

export const App = () => {
  const {ideas,loading} = useTracker(() => {
    const handle = Meteor.subscribe("ideas.allIdeas");
    const data = IdeasCollection.find({}, { sort: { upVote: -1 } }).fetch();
    return {loading: !handle.ready(), ideas: data};
  }, []);

  if (loading) {
    <p>Application loading.....</p>

  }



  return (
    <div>
      <h1>Vote Application</h1>
      <SaveIdea />
      <div className="display-div">
        {ideas.map((idea) => (
          <DisplayIdea idea={idea} key={idea._id} />
        ))}
      </div>
    </div>
  );
};
