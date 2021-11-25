import { Meteor } from "meteor/meteor";
import { IdeasCollection } from "../ideas";

Meteor.publish("ideas.allIdeas", function () {
  return IdeasCollection.find();
});
