$(document).ready(function () {
    var height = $(window).height();
    console.log(height);
    var width = $(window).width();
    $(".all_cover").css("height",height);
    $(".all_cover").css("width",width);
    $(".main").css("height",height);
    $(".main").css("width",width);
    $("#login_btn").click(function () {
        console.log("hh");
        $("#login_modal").modal("show");
    });
    $("#register_btn").click(function () {
        console.log("hh");
        $("#register_modal").modal("show");
    });
    var cols = SetCenter(".main",".img");
    ImgPosition(".main",".img",cols);
});

$(window).resize(function () {
    var cols = SetCenter(".main",".img");
    ImgPosition(".main",".img",cols);
});




// 返回数组中最小的元素的索引
function GetMinIndex(array) {
    var min = array[0];
    var index = 0;
    for(var i = 1;i<array.length;i++){
        if(array[i]<min){
            min = array[i];
            index = i;
        }
    }
    return index;
}

// 照片定位,瀑布流布局
function ImgPosition(parent, child, cols) {
    var allbox = $(parent).find(child);
    var heightArr = [];
    var box;
    var box_height;
    var minindex;
    var minheight;
    var mainmargin = parseFloat($(parent).css("margin-left"));
    for(var i = 0;i < allbox.length; i++){
        var j = i+1;
        box = $(allbox[i]);
        box_height = box.outerHeight();
        if (i < cols) {
            heightArr.push(box.outerHeight());
        }else{

            minindex = GetMinIndex(heightArr);

            minheight = heightArr[minindex];

            box.css("position","absolute");
            box.css("left",minindex*box.outerWidth()+mainmargin+"px");
            box.css("top",minheight+"px");
            heightArr[minindex] = minheight+box_height;
        }
    }
}

function SetCenter(parent, child) {
    var boxchild = $(parent).find(child+":first-child");
    var boxwidth = boxchild.outerWidth(true);
    var screenwidth = $(window).width();
    var cols = parseInt(screenwidth/boxwidth);
    var main = $(parent);
    main.width(boxwidth*cols);
    main.css("margin","0 auto");
    return cols;
}

