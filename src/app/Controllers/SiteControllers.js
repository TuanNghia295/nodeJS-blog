class SiteControllers {
    // [GET] /home
    home(req, res) {
        res.render('home');
    }

    // [GET] /news/:slug
    // :slug là các biến động vd: news/hot-news, news/top-news
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
