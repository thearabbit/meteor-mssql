import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app-body.js';

// The App_notFound template is used for unknown routes and missing lists
import '../../ui/pages/not-found.js';
FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', {main: 'App_notFound'});
    },
};

// Author
FlowRouter.triggers.enter([
        function (context, redirect) {
            let currentUser = Session.get('currentUser');

            if (!currentUser) {
                FlowRouter.go('App.login');
            }
        }
    ],
);

// Login
import '../../ui/pages/login.js';
FlowRouter.route('/login', {
    name: 'App.login',
    action() {
        let currentUser = Session.get('currentUser');

        if (currentUser) {
            FlowRouter.go('App.home');
        } else {
            BlazeLayout.render('App_body', {main: 'App_login'});
        }
    },
});

// Home
import '../../ui/pages/home.js';
FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', {main: 'App_home'});
    },
});
