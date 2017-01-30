import {Bert} from  'meteor/themeteorchef:bert';

export const displayError = (message) => {
    message = message ? message : 'Your transaction is unsuccessful';

    return Bert.alert({
        title: 'Error',
        message: message,
        type: 'danger',
        style: 'growl-top-right',
        // icon: 'fa-music'
    });
};

export const displaySuccess = (message) => {
    message = message ? message : 'Your transaction is successful';

    return Bert.alert({
        title: 'Success',
        message: message,
        type: 'success',
        style: 'growl-top-right',
        // icon: 'fa-music'
    });
};
