const MAX_CONTENT = 10;
    let contentShown = $(".content").length - $(".content:hidden").length;
    let displayButton = contentShown >= MAX_CONTENT;
    if (displayButton) {
      $("#loadMore").show();
    } else {
      $("#loadMore").hide();
    }

    $(document).ready(function(){
        $(".content").slice(0, 7).show();
        $("#loadMore").on("click", function(e){
          e.preventDefault();
          $(".content:hidden").slice(0, 7).slideDown();
          if($(".content:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
          }
        });
      
      $('#loadMore').hide();
      if ($('.content').length > 7) {
        $('#loadMore').show();
      }
        
      })