$(function() {
  function loadContent(url){
    $('#content').load(url + ' #images').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {
    e.preventDefault();
    var href = this.href;
    var $this = $(this);
    $('a').removeClass('current-page');
    $this.addClass('current-page');
    loadContent(href);
    console.log(history);
    history.pushState('', $this.text, href);
    console.log(history);
  });
  console.log(location);
  window.onpopstate = function() {
    console.log(location.pathname);
    var path = location.pathname;
    loadContent(path);
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current-page'); links
    $('[href="' + page + '"]').addClass('current-page');
  };
});