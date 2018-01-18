import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {ReactiveVar} from 'meteor/reactive-var';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Template} from 'meteor/templating';
import {ActiveRoute} from 'meteor/zimme:active-route';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {$} from 'meteor/jquery';

// Lib
import {displayError, displaySuccess} from '../lib/alert.js';

// Schema
import {UserSchema} from '../../api/users/users.js';

import './login.html';

Template.App_user.onCreated(function helloOnCreated() {
});

Template.App_user.onRendered(function () {
});

Template.App_user.helpers({
    userSchema(){
        return UserSchema;
    },
});

Template.App_user.events({});

// Hook
let hooksObject = {
    beginSubmit: function () {
        $('.js-btn-loading').button('loading');
    },
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        // Call method
        Meteor.call(
            'users.insert',
            insertDoc,
            (error, result) => {
                if (error) {
                    // Add invalid keys to schema
                    // UserSchema.namedContext("App_user")
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
    endSubmit: function () {
        $('.js-btn-loading').button('reset');
    },
    onSuccess(formType, result)
    {
        displaySuccess('Your transaction is successful');
    },
    onError(formType, error)
    {
        displayError(error.message);
    }
};

AutoForm.addHooks(['App_user'], hooksObject);
