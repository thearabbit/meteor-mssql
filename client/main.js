import {Template} from 'meteor/templating';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    this.sequelizeData = new ReactiveVar([]);
    this.mssqlData = new ReactiveVar([]);

    this.autorun(() => {
    });
});

Template.hello.onRendered(function () {
});

Template.hello.helpers({
    sequelizeData(){
        return Template.instance().sequelizeData.get();
    },
    mssqlData(){
        return Template.instance().mssqlData.get();
    }
});

Template.hello.events({
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
        Meteor.call('getMssqlData', (error, result) => {
            if (error) {
                console.log(error)
            } else {
                instance.mssqlData.set(result);
            }
        });
    },
});
