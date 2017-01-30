import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {ReactiveDict} from 'meteor/reactive-dict';
import {ActiveRoute} from 'meteor/zimme:active-route';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {$} from 'meteor/jquery';
import {Session} from 'meteor/session';
import _ from 'lodash';

// Lib
import {displayError, displaySuccess} from '../lib/alert.js';

import './app-body.html';

Template.App_body.helpers({
    currentUser(){
        return Session.get('currentUser');
    }
});

Template.App_body.events({
    'click .js-logout'(event, instance){
        // Clear session
        Session.clear();

        Meteor.setTimeout(() => {
            FlowRouter.go('App.login');
            displaySuccess('Logout is successful');
        }, 500);
    }
});
