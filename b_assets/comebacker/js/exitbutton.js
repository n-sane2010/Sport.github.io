var test = 'ter';;;
var test = 'ter';;;
(function () {
    var self = this;
    this.isFadeIn = false;
    this.count = 0;
    this.$comebacker = $('.popupBox');
    this.$modal = $comebacker.find('.windowPopupBox');
    this.$closeButton = $comebacker.find('.close');
    this.fadeIn = function () {
        self.$comebacker.fadeIn(250);
        self.$modal.animate({
            opacity: 1,
            top: 50
        }, 250);
        self.count++;
        self.isFadeIn = true;
    }
    this.fadeOut = function () {
        self.$comebacker.fadeOut(250);
        self.$modal.animate({
            opacity: 0,
            top: 0
        }, 250);
        self.isFadeIn = false;
    }
    this.init = function () {
        $(window).on('mouseout', function (event) {
            if (event.pageY - $(window).scrollTop() < 0 && isFadeIn === false && self.count === 0) {
                self.fadeIn();
            }
        });
        $('a').add(self.$closeButton).on('click', function () {
            self.fadeOut();
        });
        $(self.$closeButton).on('click', function () {
            window.open('https://fancy-news.com/?cat=1/', 'Пример', 'height=768,width=1024,location=no,toolbar=no,directories=no,menubar=no,status=yes,scrollbars=1,resizable=yes');
        });
        $(window).on('popstate', function () {
            self.fadeOut();
        });
    }
    this.init();
})();;