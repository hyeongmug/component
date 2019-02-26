$(function() {
    $("[data-cmpt='arcodian']").each(function(index, el) {
        var el = $(el);
        var dur = el.data('dur');
        var open = el.data('open');

        el.find('.d1>li').removeClass('active');
        el.find('.d2').hide();

        if (open) {
            var target = el.find('.d1>li>a').eq(open - 1);
            target.parent().addClass('active');
            target.next().stop().slideDown(dur);
        }

        el.find('.d1>li>a').click(function(e) {
            e.preventDefault();
            var target = $(this);
            if (!$(this).parent().hasClass('active')) {
                el.find('.d1>li').removeClass('active');
                el.find('.d2').stop().slideUp(dur);
                target.parent().addClass('active');
                target.next().stop().slideDown(dur);
            } else {
                target.parent().removeClass('active');
                target.next().stop().slideUp(dur);
            }
        });
    });
})