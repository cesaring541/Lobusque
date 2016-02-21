// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'googleAuth' : {
        'clientID'      : '593799744610-v24s0fhuvtpmafuabscc2fm8hqtktphm.apps.googleusercontent.com',
        'clientSecret'  : 'x9MFJcSq05sEMj4pJ6kzCWct',
        'callbackURL'   : 'https://gentle-journey-9664.herokuapp.com/auth/google/callback'
    },

    'facebookAuth' : {
        'clientID'      : '439948929538362', // your App ID
        'clientSecret'  : '6f1b43b613a93a0ca73886ca537c9793', // your App Secret
        'callbackURL'   : 'https://gentle-journey-9664.herokuapp.com/auth/facebook/callback'
    },

};