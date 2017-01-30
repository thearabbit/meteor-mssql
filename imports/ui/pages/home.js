import {Meteor} from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Template} from 'meteor/templating';
import {ActiveRoute} from 'meteor/zimme:active-route';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {$} from 'meteor/jquery';

import './home.html';

Template.App_home.onCreated(function helloOnCreated() {
    this.sequelizeData = new ReactiveVar([]);
    this.mssqlData = new ReactiveVar([]);

    this.autorun(() => {
    });
});

Template.App_home.onRendered(function () {
});

Template.App_home.helpers({
    sequelizeData(){
        return Template.instance().sequelizeData.get();
    },
    mssqlData(){
        return Template.instance().mssqlData.get();
    }
});

Template.App_home.events({
    'click .js-get-data-sequelize'(event, instance) {
        Meteor.call('getSequelizeData', (error, result) => {
            if (error) {
                console.log(error)
            } else {
                instance.sequelizeData.set(result);
            }
        });
    },
    'click .js-mssql-data'(event, instance) {
        Meteor.call('getMssqlData', 'admin', (error, result) => {
            if (error) {
                console.log(error)
            } else {
                instance.mssqlData.set(result);
            }
        });
    },
});
