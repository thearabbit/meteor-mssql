import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import _ from 'lodash';

if (Meteor.isClient) {
    require('../../ui/pages/login.js');
}

export const LoginSchema = new SimpleSchema({
    username: {
        type: String,
        label: 'Username',
    },
    password: {
        type: String,
        label: 'Password',
        // min:8
    }
});

//  Customizing Validation Messages
SimpleSchema.messages({
    "invalidLogin": "[label] is invalid",
});
