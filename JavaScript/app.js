function insert(num){
  document.form.textview.value = document.form.textview.value + num
}
function back(){
  var expr = document.form.textview.value;
  document.form.textview.value = expr.substring(0,expr.length-1)
}
function clean(){
  document.form.textview.value = ''
}
function equal(){
  var expr = document.form.textview.value;
  document.form.textview.value = eval(expr)
}
function refresh(){
  var textContent = document.getElementById('editor-textarea').value; 
  document.getElementById('viewer').srcdoc = textContent;
}

$(document).ready(function() {
  // On click show menu on small screen
  
    $('body').addClass('js');
    var $menu = $('#menu'),
      $menulink = $('.menu-link');
    
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
  
  var toggled = 0;
  
  $('.menu-link').click(function(){
    if(toggled == 0){
    $('.bar3').stop().transition({rotate: "45", "margin-top": "13px"});
    $('.bar2').stop().transition({opacity: "0"}, "fast");
    $('.bar1').stop().transition({rotate: "-45", "margin-top": "13px"});
      toggled++;
      console.log("toggled down")
    }
    else{
      
    $('.bar3').stop().transition({rotate: "+=135", "margin-top": "3px"});
    $('.bar2').transition({opacity: "1"}, "fast");
    $('.bar1').stop().transition({rotate: "-=135", "margin-top": "23px"});
    toggled--;
     console.log("Togged Up")
    }
  });
    });