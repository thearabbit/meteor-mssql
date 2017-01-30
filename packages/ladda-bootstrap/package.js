Package.describe({
    name: 'theara:ladda-bootstrap',
    version: '0.1.4',
    // Brief, one-line summary of the package.
    summary: 'Ladda for Bootstrap 3',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.2.3');
    api.use('ecmascript');

    api.addFiles([
        'lib/ladda-themeless.min.css',
        'lib/spin.js',
        'lib/ladda.js',
        // 'lib/ladda.jquery.min.js',
    ], 'client');

    // api.mainModule('Ladda', 'client');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('theara:ladda-bootstrap');
    api.mainModule('ladda-bootstrap-tests.js');
});
