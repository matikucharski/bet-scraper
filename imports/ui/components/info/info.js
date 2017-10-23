import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
    Meteor.subscribe('links.all');
});

Template.info.helpers({
    results() {
      return Links.find({});
    }
});

Template.info.events({
    'submit .info-link-add'(event) {
        event.preventDefault();

        const target = event.target;
        const phrase = target.phrase;

        Meteor.call('links.insert', phrase.value, (error, res) => {
            if (error) {
                alert(error.error);
            } else {
                console.log('%c MATIdebug: ', 'background: #222; color: #bada55', res);
                phrase.value = '';
            }
        });
    },
});
