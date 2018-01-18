import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import _ from 'lodash';

export const UserSchema = new SimpleSchema({
    firstName: {
        type: String,
        label: 'First name',
    },
    lastName: {
        type: String,
        label: 'Last name',
    },
    username: {
        type: String,
        label: 'Username',
        min: 8
    },
    password: {
        type: String,
        label: 'Enter a password',
        min: 8
    },
    confirmPassword: {
        type: String,
        label: "Enter the password again",
        min: 8,
        custom: function () {
            if (this.value !== this.field('password').value) {
                return "passwordMismatch";
            }
        }
    },
    role: {
        type: String,
        label: "Role",
        allowedValues: ['Admin', 'Result', 'Reporter']
    }
});

//  Customizing Validation Messages
SimpleSchema.messages({
    "passwordMismatch": "Passwords do not match"
});