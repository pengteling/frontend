$(function() {
$("#meizu-header-link-product-meilan").hover(function() {
    $("#meizu-header-sub-meilan").show().addClass("show");

}, function() {
    $("#meizu-header-sub-meilan").hide().removeClass("show");

}
)
});

$(function() {
//imagemap功能
$('#cqdt').mapster({
    singleSelect: true,
    fillColor: '448844',
    fillOpacity: 0.6,
    isSelectable: false,
    mapKey: "data-key",
    showToolTip: true,
    clickNavigate: false,
    toolTipClose: ["area-click", "tooltip-click", "image-mouseout"], //
    toolTipContainer: '<div style="border: 2px solid #046053; background: #EEEEEE;padding:10px 5px 10px 20px; margin: 4px; -moz-box-shadow: 3px 3px 5px #535353; ' +
        '-webkit-box-shadow: 3px 3px 5px #535353; box-shadow: 3px 3px 5px #535353; -moz-border-radius: 6px 6px 6px 6px; -webkit-border-radius: 6px; ' +
        'border-radius: 6px 6px 6px 6px; opacity: 0.9;"></div>',
    areas: [
        {
            key: "chengkou",
            toolTip: "<div class='newslink'>城口</div>"
        },
        {
            key: "wuxi",
            toolTip: "<div class='newslink'>巫溪</div>"
        },
        {
            key: "kaixian",
            toolTip: "<div class='newslink'>开县</div>"
        },
        {
            key: "yunyang",
            toolTip: "<div class='newslink'>云阳</div>"
        },
        {
            key: "fengjie",
            toolTip: "<div class='newslink'>奉节</div>"
        },
        {
            key: "wushan",
            toolTip: "<div class='newslink'>巫山</div>"
        },
        {
            key: "wanzhou",
            toolTip: "<div class='newslink'>万州</div>"
        },
        {
            key: "liangping",
            toolTip: "<div class='newslink'>梁平</div>"
        },
        {
            key: "zhongxian",
            toolTip: "<div class='newslink'>忠县</div>"
        },
        {
            key: "dianjiang",
            toolTip: "<div class='newslink'>垫江</div>"
        },
        {
            key: "fengdu",
            toolTip: "<div class='newslink'>丰都</div>"
        },
        {
            key: "changshou",
            toolTip: "<div class='newslink'>长寿</div>"
        },
        {
            key: "fuling",
            toolTip: "<div class='newslink'>涪陵</div>"
        },
        {
            key: "pengshui",
            toolTip: "<div class='newslink'>彭水</div>"
        },
        {
            key: "qianjiang",
            toolTip: "<div class='newslink'>黔江</div>"
        },
        {
            key: "youyang",
            toolTip: "<div class='newslink'>酉阳</div>"
        },
        {
            key: "xiushan",
            toolTip: "<div class='newslink'>秀山</div>"
        },
        {
            key: "wulong",
            toolTip: "<div class='newslink'>武隆</div>"
        },
        {
            key: "nanchuan",
            toolTip: "<div class='newslink'>南川</div>"
        },
        {
            key: "qijiang",
            toolTip: "<div class='newslink'>綦江</div>"
        },
        {
            key: "jiangjin",
            toolTip: "<div class='newslink'>江津</div>"
        },
        {
            key: "hechuan",
            toolTip: "<div class='newslink'>合川</div>"
        },
        {
            key: "tongnan",
            toolTip: "<div class='newslink'>潼南</div>"
        },
        {
            key: "tongliang",
            toolTip: "<div class='newslink'>铜梁</div>"
        },
        {
            key: "dazu",
            toolTip: "<div class='newslink'>大足</div>"
        },
        {
            key: "rongchang",
            toolTip: "<div class='newslink'>荣昌</div>"
        },
        {
            key: "bishan",
            toolTip: "<div class='newslink'>璧山</div>"
        },
        {
            key: "yongchuan",
            toolTip: "<div class='newslink'>永川</div>"
        },
        {
            key: "shizhu",
            toolTip: "<div class='newslink'>石柱</div>"
        },
        {
            key: "zhuchengqu",
            toolTipClose: ["area-click", "tooltip-click"],
            toolTip: '<div style="width:200px;" class="liuchun"><a class="newslink newslink2" target="_blank" href="http://www.yzta.gov.cn/">渝中区</a><a class="newslink newslink2" href="#">江北区</a><a  class="newslink newslink2" href="#">南岸区</a></div><div style="width:200px"><a target="_blank" class="newslink newslink2" href="http://www.spbllj.gov.cn/">沙坪坝区</a><a  class="newslink newslink2" href="#">大渡口区</a><a  class="newslink newslink2" href="#">北碚区</a></div><div style="width:200px"><a  class="newslink newslink2" href="#">渝北区</a><a class="newslink newslink2" href="#">九龙坡区</a><a class="newslink newslink2" href="#">巴南区</a></div>'
        }
    ],
    onClick: function(e) {
        //单独一个area的clickNavigate和toolTipContainer好像没有效果,并且click事件只有在clickNavigator为false才可能触发。
        //alert(e.key);
        if (e.key == "yunyang") {
            window.open("http://yyly.yunyang.gov.cn/");
        } else if (e.key == "changshou") {
            window.open("http://ly.cqcs.gov.cn/www/index/");
        } else if (e.key == "fuling") {
            window.open("http://www.flta.gov.cn/");
        } else if (e.key == "qijiang") {
            window.open("http://www.qjly.com.cn/");
        } else if (e.key == "youyang") {
            window.open("http://www.zgyyly.gov.cn/");
        } else if (e.key == "jiangjin") {
            window.open("http://ly.jiangjin.gov.cn/www/index/index.asp");
        } else if (e.key == "yongchuan") {
            window.open("http://www.uyc.gov.cn/");
        } else if (e.key == "pengshui") {
            window.open("http://ps.cq.gov.cn/Html/87/lyzw/");
        } else if (e.key == "shizhu") {
            window.open("http://www.cqszta.gov.cn/ly/");
        } else {
            //alert(e.key);
        }
    },
    onShowToolTip: function(data) {
        //alert(data.key);
        //alert($(data.toolTip).css("left"));
        if (data.key == "zhuchengqu") {
            //alert(data.key);
            //$(data.toolTip).css("left", (parseInt($(data.toolTip).css("left")) - "20") + "px");
            $(data.toolTip).css({
                "margin-left": "-20px",
                "margin-top": "20px"
            });
        }
    }
}).mapster('set', true, 'jiangjin');


})