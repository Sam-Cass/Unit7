$ (document) .ready(function() {

$("h1") .hide();

$("h1") .click(function() {
  $(this) .next().slideToggle(300);
  });
  
});
