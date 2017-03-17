(function () {

    $(document).ready(function () {   


  /*InView*/
        inView.offset({
            top: 200,
            right: 30,
            bottom: 200,
            left: 30
        });
//Global offset for viewport


inView('.digits-container')
                .on('enter', function (el) {
                    //console.log('enter');
                    if (!$(el).hasClass('iv-enter')) {
                        $(el).addClass('iv-enter');

                        $(".counting").each(function (i, elem) {
                            var data = parseFloat($(elem).text());
                            if (data < 2) {
                                time = 300;
                            } else {
                                time = 3000;
                            }
                            $({countNum: 0}).animate({countNum: data}, {duration: time, easing: 'swing', step: function () {
                                    $(elem).text(Math.floor(this.countNum));
                                }, complete: function () {
                                    $(elem).text(this.countNum);
                                }});
                        });

                    }


                })
                .on('exit', function (el) {
                    // console.log('exit');
                    if (!$(el).hasClass('once')) {
                        $(el).removeClass('iv-enter');
                    }
                });

    });
})(jQuery);
