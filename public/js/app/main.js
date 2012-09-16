var AppRouter = Backbone.Router.extend({
    routes:{
        ""     : "home",
        "about": "about"
    },

    initialize: function() {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function() {
        if (!this.homeView) {
            this.homeView = new HomeView();
        }
        $('#content').html(this.homeView.el);
        this.homeView.selectMenuItem('home-menu');
    },

    about: function() {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    }
});

utils.loadTemplate(['HeaderView', 'HomeView', 'AboutView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});
