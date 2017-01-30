import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {ReactiveVar} from 'meteor/reactive-var';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Template} from 'meteor/templating';
import {ActiveRoute} from 'meteor/zimme:active-route';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {$} from 'meteor/jquery';
// import 'meteor/theara:ladda-bootstrap/lib/ladda.js';
// import 'meteor/theara:ladda-bootstrap';

// Lib
import {displayError, displaySuccess} from '../lib/alert.js';

// Schema
import {LoginSchema} from '../../api/login/login.js';

import './login.html';

Template.App_login.onCreated(function helloOnCreated() {
});

Template.App_login.onRendered(function () {
});

Template.App_login.helpers({
    loginSchema(){
        return LoginSchema;
    },
});

Template.App_login.events({});

// Hook
let hooksObject = {
    // before: {
    //     method: function (doc) {
    //         return doc;
    //     }
    // },
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        $('.js-login').button('loading');

        // this.event.preventDefault();
        console.log('onSubmit');

        Meteor.call(
            'loginWithPassword',
            {
                username: insertDoc.username,
                password: insertDoc.password,
            },
            (error, result) => {
                $('.js-login').button('reset');

                if (error) {
                    // Add invalid keys to schema
                    // LoginSchema.namedContext("App_login")
                    //     .addInvalidKeys([
                    //         {name: "username", type: "invalidLogin"},
                    //         {name: "password", type: "invalidLogin"},
                    //     ]);

                    this.done(new Error(error.reason));
                } else {

                    this.done(null, result);

                }
            });

        return false;
    },
    onSuccess(formType, result)
    {
        // Set session
        Session.setPersistent('currentUser', result);
        FlowRouter.go('App.home');

        displaySuccess('Login is successful');
    },
    onError(formType, error)
    {
        displayError(error.message);
    }
};

AutoForm.addHooks(['App_login'], hooksObject);