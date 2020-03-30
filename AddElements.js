$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
	$(".ex-element:first").after('<div id="img-container" style="position: relative; width:100%;"><div id="cover-layer" style="position: absolute; z-index:1; width:100%; height:100%;"></div></div>');
	$("#img-container").append($("img, img+br"));
	$(".ex-element:first").append('<p id="disable-ab">Nếu không tải được ảnh vui lòng tắt trình Chặn quảng cáo!<br />(Trang web này không hề có quảng cáo)</p><p><a href="../"><b>Trang chủ</b></a></p>\n<p>Nhớ ủng hộ nhóm dịch: <a href="https://fb.com/mashimahirovnfc" target="_blank">Mashima Hiro VN FC</a> và <a href="https://fb.com/Black-Clover-VN-Fanpage-1049221435105449" target="_blank">Black Clover VN Fanpage</a></p>');
	$(".ex-element:last").append('<p>Nhớ ủng hộ nhóm dịch: <a href="https://fb.com/mashimahirovnfc" target="_blank">Mashima Hiro VN FC</a> và <a href="https://fb.com/Black-Clover-VN-Fanpage-1049221435105449" target="_blank">Black Clover VN Fanpage</a></p>\n<p><a href="../"><b>Trang chủ</b></a></p>');
});