/*$(window).scroll(function(){
    if($(window).scrollTop() <= 1000){
      $('.ani-1').addClass(' animated slideInLeft');
      $('.ani-2').addClass(' animated fadeInUp');
      $('.ani-3').addClass(' animated fadeInRight');
      $('.ani-5').addClass(' animated fadeIn');
      //progress bar timing
      setTimeout(function(){
         $('#bar-2').addClass('');
      }, 10000)
    } else if($(window).scrollTop() <= 1020){
      $('.ani-sm').addClass(' animated fadeIn');
    }else {
      $('.ani-4').removeClass(' animated fadeInUp');
    }

});*/

var $window           = $(window),
    win_height_padded = $window.height() * 1.1,
    isTouch           = Modernizr.touch;

$window.on('scroll', revealOnScroll);

function revealOnScroll() {
  var scrolled = $window.scrollTop();
  $(".revealOnScroll:not(.animated)").each(function () {
    var $this     = $(this),
        offsetTop = $this.offset().top;

    if (scrolled + win_height_padded > offsetTop) {
      if ($this.data('timeout')) {
        window.setTimeout(function(){
          $this.addClass('animated ' + $this.data('animation'));
        }, parseInt($this.data('timeout'),10));
      } else {
        $this.addClass('animated ' + $this.data('animation'));
      }
    }
  });
}

function function1(){
  document.getElementById("tab-one").setAttribute("type","radio");
  document.getElementById("tab-two").setAttribute("type","radio");
  document.getElementById("tab-three").setAttribute("type","radio");

  var x = document.getElementById("tab-one");
    if(x.type === "radio"){
      x.setAttribute("type","checkbox");
    } else {
      x.setAttribute("type","radio");
    }

}

function function2(){
  document.getElementById("tab-one").setAttribute("type","radio");
  document.getElementById("tab-three").setAttribute("type","radio");
  document.getElementById("tab-four").setAttribute("type","radio");


  //function2();
  var x = document.getElementById("tab-two");
    if(x.type === "radio"){
      x.setAttribute("type","checkbox");
    } else {
      x.setAttribute("type","radio");
    }

}
function function3(){
  document.getElementById("tab-one").setAttribute("type","radio");
  document.getElementById("tab-two").setAttribute("type","radio");
  document.getElementById("tab-four").setAttribute("type","radio");

  //function2();
  var x = document.getElementById("tab-three");
    if(x.type === "radio"){
      x.setAttribute("type","checkbox");
    } else {
      x.setAttribute("type","radio");
    }

}

function function4(){
  document.getElementById("tab-one").setAttribute("type","radio");
  document.getElementById("tab-two").setAttribute("type","radio");
  document.getElementById("tab-three").setAttribute("type","radio");

  //document.getElementById("tab-two").setAttribute("type","checkbox");

  //function2();
  var x = document.getElementById("tab-four");
    if(x.type === "radio"){
      x.setAttribute("type","checkbox");
    } else {
      x.setAttribute("type","radio");
    }

}

window.onload = function(){
  document.getElementById("loading").remove();
}

function play(){
  console.log("playing");
  this.play();

}



$(document).ready(function(){
  $("#send-query").hide();
  $("#float-btn-2").hide();
    $("#float-btn-1").click(function(){
      $("#send-query").show();
      $("#float-btn-2").toggle();
    });
    $("#float-btn-2").click(function(){
      $("#send-query").hide();
      $("#float-btn-2").toggle();
    });
    $("#submit").click(function(){
      $("#send-query").addClass("animated fadeOut").append("<p style='color:grey;padding: 0px 0px 0px 30px'> We'll catch you later </p>");
      $("#input").hide();
      $("#float-btn-2").hide();
    });
});
