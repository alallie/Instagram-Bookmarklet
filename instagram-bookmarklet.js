// Get_Instagram
// Compiled using https://mrcoles.com/bookmarklet/

var images = [];
$( "img" ).each(function() {
  var image = $( this ).prop( "src" );
  if (image.indexOf("s150x150") >= 0 || image.indexOf("_a.jpg") >= 0) {
    return true;
  } else {
    images.push(image);
  }
});

var videos = [];
$( "video" ).each(function() {
  var video = [$( this ).prop( "poster" ),$( this ).prop( "src" )];
  videos.push(video);
});

var html = "";

$.each(images, function(index,image) {
  var display = "<img src='" + image + "'><br>";
  html += display;
});

$.each(videos, function(index,video) {
  var display = "<video poster='" + video[0] + "' src='" + video[1] + "' playsinline='' preload='none' type='video/mp4' controls></video><br>";
  html += display;
});


function nWin() {
  var w = window.open();
  $(w.document.body).html(html);
}

nWin();