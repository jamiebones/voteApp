import { Meteor } from "meteor/meteor";
import { IdeasCollection } from "./ideas.js";
import { check } from "meteor/check";

Meteor.methods({
  "ideas.insert"(idea) {
    check(idea, String);
    return IdeasCollection.insert({
      idea: idea,
      upVote: 0,
      downVote: 0,
    });
  },
  "ideas.upVote"(ideaId) {
    check(ideaId, String);
    IdeasCollection.update(ideaId, {
      $inc: {
        upVote: 1,
      },
    });
  },
  "ideas.downVote"(ideaId) {
    check(ideaId, String);
    IdeasCollection.update(ideaId, {
      $inc: {
        downVote: 1,
      },
    });
  },
});
