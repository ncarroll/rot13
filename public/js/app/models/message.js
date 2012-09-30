define([
    'backbone'
], function (Backbone) {
    var Message = Backbone.Model.extend({
        url:'/api/rot13',

        parse: function(response) {
            console.log('message parse: ' + JSON.stringify(response));
            return {cipherText: response.cipherText};
        }
    });

    return Message;
});
