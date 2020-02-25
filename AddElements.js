$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
	$(".ex-element:first").append('<p><a href="../index.md"><b>Trang chủ</b></a></p>\n<p>Nhớ ủng hộ nhóm dịch: <a href="https://fb.com/mashimahirovnfc" target="_blank">Mashima Hiro VN FC</a> và <a href="https://fb.com/Black-Clover-VN-Fanpage-1049221435105449" target="_blank">Black Clover VN Fanpage</a></p>');
	$(".ex-element:last").append('<p>Nhớ ủng hộ nhóm dịch: <a href="https://fb.com/mashimahirovnfc" target="_blank">Mashima Hiro VN FC</a> và <a href="https://fb.com/Black-Clover-VN-Fanpage-1049221435105449" target="_blank">Black Clover VN Fanpage</a></p>\n<p><a href="../index.md"><b>Trang chủ</b></a></p>');
});