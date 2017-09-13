////
// Cloud API
////
$(document).ready(function (){ 
  console.log("ready");
  const tempMessage = "The local temperature is ";
  var key = "https://api.darksky.net/forecast/53bae4534b0da5b692246d4e1623a959/37.8267,-122.4233";
  $(".fa-cloud").on("click", function(){
    console.log("clicked");
    $.ajax({
      url: key,
      dataType: "jsonp",
      success: function(r){
        console.log("success")
        console.log(r);
        var temperature = Math.floor(r.currently.temperature);
        $(".site_header_cloud_temp").append("<li>" + tempMessage + "</li>" + "<li>" + temperature + "<sup>" + "&#8457;" + "</sup>" + "</li>")
      },
      error: function(e) {
        console.log("wrong")
        $(".site_header_cloud_temp").append("<li>you done goofed</li>");
        console.log(e);
      }
    });
  });
////
//  Image Gallery
////
  const firstImg = [ "img/wayfair_mock.jpg", "img/jwli.jpg", "img/attendance.jpg" ];
  const secondImg =[ "img/chat_room.jpg", "img/traffic_light.jpg", "img/new_york_times.jpg" ];
  const thirdImg =[ "img/horoscope.jpg", "img/farm_animals.jpg", "img/calculator.jpg" ];
  const fourthImg =[ "img/image_carousel.jpg", "img/level_ground.jpg", "img/bomber_man.jpg" ];
  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;
  let fourthCount = 0; 
  $("#button-right").on("click", function() {
    firstCount++;
     if(firstCount >= firstImg.length) {
      firstCount = 0;
      $("#first-img").attr("src", firstImg[firstCount]);
     } else {
      $("#first-img").attr("src", firstImg[firstCount]);
     }
     secondCount++;
     if(secondCount >= secondImg.length) {
      secondCount = 0;
      $("#second-img").attr("src", secondImg[secondCount]);
     } else {
      $("#second-img").attr("src", secondImg[secondCount]);
     }
     thirdCount++;
     if(thirdCount >= thirdImg.length) {
      thirdCount = 0;
      $("#third-img").attr("src", thirdImg[thirdCount]);
     } else {
      $("#third-img").attr("src", thirdImg[thirdCount]);
     }
     fourthCount++;
     if(fourthCount >= fourthImg.length) {
      fourthCount = 0;
      $("#fourth-img").attr("src", fourthImg[fourthCount]);
     } else {
      $("#fourth-img").attr("src", fourthImg[fourthCount]);
     }
  });
  $("#button-left").on("click", function() {
    firstCount--;
    if(firstCount < 0) {
      firstCount = firstImg.length - 1;
      $("#first-img").attr("src", firstImg[firstCount]);
    } else {
      $("#first-img").attr("src", firstImg[firstCount])
    }
     secondCount--;
    if(secondCount < 0) {
      secondCount = secondImg.length - 1;
      $("#second-img").attr("src", secondImg[secondCount]);
    } else {
      $("#second-img").attr("src", secondImg[secondCount])
    }
     thirdCount--;
    if(thirdCount < 0) {
      thirdCount = thirdImg.length - 1;
      $("#third-img").attr("src", thirdImg[thirdCount]);
    } else {
      $("#third-img").attr("src", thirdImg[thirdCount])
    }
     fourthCount--;
    if(fourthCount < 0) {
      fourthCount = fourthImg.length - 1;
      $("#fourth-img").attr("src", fourthImg[fourthCount]);
    } else {
      $("#fourth-img").attr("src", fourthImg[fourthCount])
    }
  });
////
//  Progress bars
////
  const $win = $(window);
  const $progressHtml = $('.section_two_progress_bar_html');
  const $progressCss = $('.section_two_progress_bar_css');
  const $progressJs = $('.section_two_progress_bar_js');
  const $progressJq = $('.section_two_progress_bar_jq');
  const $progressFirebase = $('.section_two_progress_bar_firebase');
  const $progressReact = $('.section_two_progress_bar_react');
  $win.on('scroll', function() {
    console.log($win.scrollTop());
    if ($win.scrollTop() >= 650) {
      console.log('working');
      $progressHtml.addClass('is-active-html');
      $progressCss.addClass('is-active-css');
      $progressJs.addClass('is-active-js');
      $progressJq.addClass('is-active-jq');
      $progressFirebase.addClass('is-active-firebase');
      $progressReact.addClass('is-active-react');

    } else {
      console.log('you are doing something wrong');
    }
  });
////
// Progress bar percentage
////
  var $progressCounter = 0;
  $win.on('scroll', function () {
    if($win.scrollTop() >= 650) {
      setInterval(timer, 50);
    }
    function timer() {
      $progressCounter++;
      $('.section_two_progress_bar_html').text($progressCounter + '%');
      $('.section_two_progress_bar_css').text($progressCounter + '%');
      $('.section_two_progress_bar_js').text($progressCounter + '%');
      $('.section_two_progress_bar_jq').text($progressCounter + '%');
      $('.section_two_progress_bar_firebase').text($progressCounter + '%');
      $('.section_two_progress_bar_react').text($progressCounter + '%');
      if($progressCounter >= 30) {
        $('.section_two_progress_bar_react').text('30' + '%');
      }
      if ($progressCounter >= 40) {
        $('.section_two_progress_bar_firebase').text('40' + '%');
      }  
      if ($progressCounter >= 60) {
        $('.section_two_progress_bar_js').text('60' + '%');
        $('.section_two_progress_bar_jq').text('60' + '%');
      }  
      if ($progressCounter >= 90) {
        $('.section_two_progress_bar_html').text('90' + '%');
        $('.section_two_progress_bar_css').text('90' + '%');
      }
    }
  });
  $($win).on('load', function() {
    $('.site_header_banner').fadeIn(2000, function() {
      $('.site_header_cloud').fadeIn(1000);
    });
  })
});






























