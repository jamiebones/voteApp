import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/pages/App';
import "../imports/startup/client"

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
