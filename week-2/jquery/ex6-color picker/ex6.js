let $spans = $("span")
    
    for(let $span of $spans) {
    //   console.log($span)
      $($span).addClass("picker")
      $($span).css("background-color", $($span).data().color)
    
      $($span).on("click", function () {
          const color = $($span).data().color
          $(".box").css("background-color", color)
      })
    }