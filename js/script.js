$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);



  // Section 2: Effects - Animations

  // 8. Fading In Elements (and Fading Them Out Again)
  // $(".green-box").fadeOut(2000)
  // $(".red-box").fadeIn(1000)
  // $(".red-box").fadeTo(1000, 0.5)

  // $(".red-box").fadeTo(3000, 0.2)
  // $(".green-box").fadeTo(2000, 0.5)
  // $(".blue-box").fadeTo(1000, 0.8)
  //
  // $(".blue-box").fadeToggle()
  // $(".blue-box").fadeToggle()


  // 9. A Pitfall With fadeIn/fadeOut vs. fadeTo
  // $(".green-box").fadeOut(1000)
  // $(".green-box").fadeTo(1000, 0.5)
  // When using fadeOut, it sets display to none, so there is a pitfall when trying to fadeTo the box back, now that it's display is set to none. Display would also have to be set again to block, or whatever setting is needed.


  // 10. Showing and Hiding Elements
  // $(".blue-box").hide()
  // $(".blue-box").show()
  // $(".blue-box").toggle()
  // $(".blue-box").hide(1000)
  // $(".blue-box").show(1000)


  // 11. Sliding Elements Up and Down
  // $(".blue-box").slideUp(2000)
  // $(".blue-box").slideDown(2000)
  // $(".blue-box").slideToggle(2000)
  // $("p").hide()
  // $("p").slideDown(1000)


  // 12. Moving Elements
  // $(".blue-box").animate({
  //   // "margin-left": "200px"
  //   "margin-left": "+=200px"
  // }, 1000, "linear")
  //
  // $(".blue-box").animate({
  //   "margin-left": "-=200px"
  // }, 2000, "linear")


  // 13. Get Creative: Custom Animations!
  // $(".blue-box").animate({
  //   "margin-left": "+=200px",
  //   "opacity": "0",
  //   "height": "50px",
  //   "width": "50px",
  //   "margin-top": "25px"
  // }, 1000)

  // Can also be done without using strings for keys, must remove "-" and capitalize letters immediately after
  // $(".blue-box").animate({
  //   marginLeft: "+=200px",
  //   opacity: "0",
  //   height: "50px",
  //   width: "50px",
  //   marginTop: "25px"
  // }, 1000)
  //
  // $("p").animate({
  //   fontSize: "20px"
  // }, 1000)
  // Can't use colors during animations. jQuery won't know how to change colors.


  // 14. Delaying and Chaining Animations
  // $(".red-box").fadeTo(1000, 0.2)
  // $(".green-box").delay(1000).fadeTo(1000, 0.5)
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8)

  // $(".red-box").fadeTo(1000, 0.2)
  // $(".green-box").delay(1000).fadeTo(1000, 0.5)
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn()


  // 15. Timing Animations Using Callback Functions
  // $(".red-box").fadeTo(1000, 0, function() {
  //   alert("This is the callback: Animation Finished!")
  // })

  // $(".red-box").fadeTo(1000, 0, function() {
  //   $(".green-box").fadeTo(1000, 0, function() {
  //     $(".blue-box").fadeTo(1000, 0)
  //   })
  // })
  // A callback function can be used as the final parameter in any of the jQuery animation functions we have used.

  // Also, callbacks are used when you want your animation to finish completely before the next action. If you wanted the second box to start fading a half a second after the first started, you would have to use the delay function.


  // 16. Coding Activity: Creating a Signup Lightbox!
  // $(".lightbox").delay(500).fadeIn(1000)



  // Section 3: Element Selectors

  // 17. Using CSS Selectors In jQuery
  // $("p").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("p:first").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)")

  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)")
  // Doesn't exist for "input:email"
  // Can do for "password", "checkbox", "radio", as well as "checked" and "selected" from <select> tags.


  // 18. jQuery Methods For Traversal
  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").siblings().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").prev().next().css("background-color", "rgba(180, 180, 30, 0.8)")


  // 19. jQuery Methods For Filtering
  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").filter(function(index) {
  //   return index % 3 === 1
  // }).css("background-color", "rgba(180, 180, 30, 0.8)")

  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)")

  // $("li").eq(0).css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").eq(5).css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").eq(7).css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)")

  // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)")
  // $("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8)")
  $("li").not(function(index) {
    return index % 3 === 2
  }).css("background-color", "rgba(180, 180, 30, 0.8)")
});
