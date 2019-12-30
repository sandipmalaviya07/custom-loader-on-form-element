function loadingServiceShow(zindex, id, flag) {
    try {
        var _id = $("[data-loader=" + id + "]");
        _id.CenterLoader(zindex, id, flag);
    } catch (error) {
        loadingServiceHide(id);
    }
}
$.fn.CenterLoader = function (zindex, id, flag) {
    var height = $(this).outerHeight() + "px";
    var width = $(this).outerWidth() + "px";
    var top = $(this).offset().top;
    var left = $(this).offset().left;
    var loadingContainer = "body";
    if (flag == true) {
        top = 0;
        left = 0;
        loadingContainer = this;
    }
    var centerTop = Math.max(0, (($(this).outerHeight() / 2) - 7)) + "px";
    var centerLeft = Math.max(0, (($(this).outerWidth() / 2) - 7)) + "px";

    var loadingContain;
    if (id === "" || id === null || id === undefined) {
        id = "loader-image";
    } else {
        var _loadIdAppend = id
        id = id + "_Loader";
    }
    loadingContain = "<div style='position:absolute;height:" + height + ";width:" + width + ";background:#ccc;z-index:" + zindex + ";top:" + top + "px;left:" + left + "px;opacity:0.7' id='" + id + "' class='loader-image'><div style='position:absolute;top:" + centerTop + ";left:" + centerLeft + ";color:white;height: 28px;width: 28px;background: transparent url(assets/image/loader.gif) no-repeat scroll 0 0;' class='loader-style'></div></div>";
    if (flag == true) {
        loadingContain = "<div style='position:fixed;height:100%;width:100%;background:#ccc;z-index:" + zindex + ";top:0;left:0;opacity:0.7;'id='" + id + "' class='loader-image'><div style='position:absolute;top:49%;left:49%;color:white;height: 28px;width: 28px;background: transparent url(assets/image/loader.gif) no-repeat scroll 0 0;'class='loader-style'></div></div>"
    }
    $("body").append(loadingContain);
}
function loadingServiceHide(id) {
    if (id === "" || id === null || id === undefined) {
        $(".loader-image").remove();
    } else {
        $("#" + id + "_Loader").remove();
    }
}