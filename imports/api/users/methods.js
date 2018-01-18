import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import _ from 'lodash';

// Ms sql
import {sqlRequest, seqConnect} from '../lib/connection.js';

Meteor.methods({
    async 'users.insert'({username, password}){
        Meteor._sleepForMs(500);

        let data = await sqlRequest.query(`select firstName, lastName, username, role from users where username='${username}' and password='${password}'`);

        return data[0];
    }
});
