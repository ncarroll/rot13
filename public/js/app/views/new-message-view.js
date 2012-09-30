define([
    'jquery',
    'underscore',
    'backbone',
    'app/models/message'
], function ($, _, Backbone, Message) {
    var NewMessageView = Backbone.View.extend({

        events:{
            'submit form':'addMessage'
        },

        initialize:function () {
            this.collection.on('add', this.clearInput, this);
        },

        addMessage:function (e) {
            this.collection.create({plainText:this.$('#plain-text').val()});

            e.preventDefault();
        },

        clearInput:function () {
            this.$('#plain-text').val('');
        },

        render:function () {
            return this;
        }
    });

    return NewMessageView;
});