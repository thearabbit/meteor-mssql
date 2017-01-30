import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import _ from 'lodash';

// Ms sql
import {sqlRequest, seqConnect} from '../lib/connection.js';

Meteor.methods({
    async loginWithPassword({username, password}){
        Meteor._sleepForMs(500);

        // Check
        // new SimpleSchema({
        //     username: {type: String},
        //     password: {type: Number}
        // }).validate({username, password});

        let data = await sqlRequest.query(`select firstName, lastName, username, role from users where username='${username}' and password='${password}'`);


        if (_.isEmpty(data)) {
            throw new Meteor.Error('loginWithPassword', 'Invalid username/password');
        }

        return data[0];
    }
});
