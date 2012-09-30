define([
    'backbone',
    'app/models/message'
], function (Backbone, Message) {
    var Messages = Backbone.Collection.extend({
        model:Message
    });

    return Messages;
});