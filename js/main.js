$(document).ready(function (){
  console.log("ready");

  var key = "https://crossorigin.me/https://api.darksky.net/forecast/53bae4534b0da5b692246d4e1623a959/37.8267,-122.4233";
  $("body").on("click", function(){
      console.log("clicked");
      $.ajax({
        url: key,
        success: function(r){
          console.log("success")
          console.log(r);
          var temperature = r.currently.temperature;
          $("ul").append("<li>" + temperature + " degrees</li>")
        },
        error: function(e) {
          console.log("wrong")
  	       $("ul").append("<li>you done goofed</li>");
           console.log(e);
         }
  });
});
});
