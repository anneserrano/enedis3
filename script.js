$(document).ready(function(){

$("#summer").hide();
$("#winter").hide();
$("#summer").fadeIn(2000);
$("#winter").fadeIn(2000);

$("#summer").click(function(){
  $(".text1").hide();
  $(".text2").hide();
  $(".text3").hide();
  $(".text4").hide();
  $(".text5").hide();
  $(".text6").hide();

    $("#profil").hide();
  $("#profil").fadeIn(1000);

    $("#profil").html(
'<div class="row menu2">'+
  '<div class="box boxp1 col-xs-12 col-sm-4">'+
    '<div id="p1">'+
    '<p>p1</p>'+
    '</div>'+
    '<div class="text1"></div>'+
  '</div>'+

  '<div class="box boxp2 col-xs-12 col-sm-4">'+
    '<div id="p2">'+
    '<p>p2</p>'+
    '</div>'+
    '<div class="text2"></div>'+
  '</div>'+

  '<div class="box boxp3 col-xs-12 col-sm-4">'+
    '<div id="p3">'+
    '<p>p3</p>'+
    '</div>'+
    '<div class="text3"></div>'+
  '</div>'+

  '</div>'
);
});


$("#winter").click(function(){
  $(".text1").hide();
  $(".text2").hide();
  $(".text3").hide();
  $(".text4").hide();
  $(".text5").hide();
  $(".text6").hide();

    $("#profil").hide();
    $("#profil").fadeIn(1000);

    $("#profil").html(
'<div class="row menu2">'+
  '<div class="box boxp4 col-xs-12 col-sm-4">'+
    '<div id="p4">'+
    '<p>p4</p>'+
    '</div>'+
    '<div class="text4"></div>'+
  '</div>'+

  '<div class="box boxp5 col-xs-12 col-sm-4">'+
    '<div id="p5">'+
    '<p>p5</p>'+
    '</div>'+
    '<div class="text5"></div>'+
  '</div>'+

  '<div class="box boxp6 col-xs-12 col-sm-4">'+
    '<div id="p6">'+
    '<p>p6</p>'+
    '</div>'+
    '<div class="text6"></div>'+
  '</div>'+

  '</div>'
);
});

$("#profil").delegate("#p1", "click", function(){
  $(".text1").toggle(1000);

    $(".text1").html(

      '<p>conseil 1-1</p>'+
      '<p>conseil 1-2</p>'+
      '<p>conseil 1-2</p>'+
      '<p>conseil 1-2</p>'+
      '<p>conseil 1-2</p>'+
      '<p>conseil 1-2</p>'+
      '<p>conseil 1-3</p>'
    );
  });

  $("#profil").delegate("#p2", "click", function(){
    $(".text2").toggle(1000);
      $(".text2").html(

        '<p>conseil 2-1</p>'+
        '<p>conseil 2-2</p>'+
        '<p>conseil 2-3</p>'
      );
    });

    $("#profil").delegate("#p3", "click", function(){
      $(".text3").toggle(1000);
        $(".text3").html(

          '<p>conseil 3-1</p>'+
          '<p>conseil 3-2</p>'+
          '<p>conseil 3-3</p>'
        );
      });

      $("#profil").delegate("#p4", "click", function(){
        $(".text4").toggle(1000);
          $(".text4").html(

            '<p>conseil 4-1</p>'+
            '<p>conseil 4-2</p>'+
            '<p>conseil 4-3</p>'
          );
        });

        $("#profil").delegate("#p5", "click", function(){
          $(".text5").toggle(1000);
            $(".text5").html(

              '<p>conseil 5-1</p>'+
              '<p>conseil 5-2</p>'+
              '<p>conseil 5-3</p>'
            );
          });

          $("#profil").delegate("#p6", "click", function(){
            $(".text6").toggle(1000);
              $(".text6").html(

                '<p>conseil 6-1</p>'+
                '<p>conseil 6-2</p>'+
                '<p>conseil 6-3</p>'
              );
            });
});