
function do_slideshow() {
  var current=$('#div-gallery img.active');
  var next=$('#div-gallery img.active').next();
  if (next.length==0) next=$('#div-gallery img:first');
  if (current==next) return;
  current.fadeOut(1000).removeClass('active');
  next.addClass('active').fadeIn(1000,function() {
    window.setTimeout('do_slideshow()',5000);
  });
}
function do_before_after() {
  var current=$('#before-after .active');
  var next=$('#before-after .active').next();
  if (next.length==0) next=$('#before-after .before-after-slide:first');
  if (current==next) return;
  current.fadeOut(1000).removeClass('active');
  next.addClass('active').fadeIn(1000,function() {
    window.setTimeout('do_before_after()',5000);
  });
}
$(document).ready(function() {
  $('a[rel^="external"]').bind('click', function () {
    window.open(this.href);
    return false;
  });
  $("a[rel^='lightbox'], a.lightbox").fancybox();

  //#--

  $('#ul-navigation li').hover(
      function () {
        $('div', this).fadeIn(150);
      },
      function () {
        $('div', this).fadeOut(150);
      }
  );

  //#--
  var img = $('#div-gallery img');
  if (img.length > 0) {
    var h = Math.min(400, img[0].height);
    if (img.length > 1) $.each(img, function (i, e) {
      h = Math.min(h, $(e).height());
    });
    $('#div-gallery').css('height', h + 'px');
    if (img.length > 1) {
      $('#div-gallery img:first').addClass('active');
      window.setTimeout('do_slideshow()', 5000);
    }
  }

  //#--
  var img = $('#before-after .before-after-slide');
  if (img.length > 0) {
    var h = 0;
    $.each(img, function (i, e) {
      h = Math.max(h, $(e).height());
    });
    $('#before-after-container').css('height', h);
    if (img.length > 1) {
      $('#before-after .before-after-slide:first').addClass('active');
      window.setTimeout('do_before_after()', 5000);
    }
  }
});
