$(document).ready(function(){
    $('.nav').singlePageNav({
        offset:70
    });
    $('.navbar-collapse a').click(function(){
        new WOW().init();
    $('.navbar-collapse').collapse('hide');
    });
    new WOW().init();

    (function(){
        var arrText=[
            'demo 1',
            'demo 2',
            'demo 3',
            '官网'
        ];
        var arrurl= [
            'https://www.baidu.com/baidu?tn=monline_3_dg&ie=utf-8&wd=%E7%9F%A5%E4%B9%8E',
            'https://www.baidu.com/baidu?tn=monline_3_dg&ie=utf-8&wd=csdn',
            'http://www.sina.com.cn/',
            'http://www.qq.com/',
        ];

        $('.hot_area li').mouseover(function(){
            $('.hot_area li p').remove();
            $(this).append('<p>'+arrText[$(this).index()]+'</p>')
        })
    })();

});
