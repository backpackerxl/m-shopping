; (function (doc) {
    const bottom_bar = doc.querySelector('.bottom-bar'),
        home = bottom_bar.querySelector('.home'),
        like = bottom_bar.querySelector('.like'),
        shoop = bottom_bar.querySelector('.shoop'),
        user = bottom_bar.querySelector('.user');

    const bar_dom_pool = [home, like, shoop, user];
    bar_dom_pool.forEach(dom => {
        dom.addEventListener('click', function () {
            bar_dom_pool.forEach(dom => dom.classList.remove('active'))
            this.classList.add('active');
        });
    });
})(document);
