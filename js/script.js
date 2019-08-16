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
  // $("li").not(function(index) {
  //   return index % 3 === 2
  // }).css("background-color", "rgba(180, 180, 30, 0.8)")



  // Section 4: Section 4: Manipulating the DOM I – Inserting, Replacing and Removing Elements

  // 21. Adding New Elements to the DOM
  // $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>")
  // or
  // $("<li>I'm gonna be the last sub-item</li>").appendTo($("ul ul:first"))

  // $("ul ul:first").prepend("<li>I'm gonna be the first sub-item</li>")
  // or
  // $("<li>I'm gonna be the first sub-item</li>").prependTo("ul ul:first")

  // $("<h4>Eric Klimowich</h4>").prependTo("#content")

  // $(".red-box").after("<div class='red-box'>Another Red</div>")
  // or
  // $("<div class='red-box'>Another Red</div>").insertAfter(".red-box")

  // $(".blue-box").before("<div class='blue-box'>Another Blue</div>")
  //or
  // $("<div class='blue-box'>Another Blue</div>").insertBefore(".blue-box")
  // or
  // $(".blue-box").before(function() {
  //   return "<div class='blue-box'>Blue 2</div>"
  // })

  // $(".blue-box").before($(".red-box"))
  // This function does not clone the red box, it actually moves the element to where you want it inserted.

  // $("p").after($("#list"))
  // This one will clone the element as there are multiple <p> tags in our HTML example.


  // 22. Replace Elements and Content
  // $("li").replaceWith("<li>Replaced.</li>")
  // $("li").replaceWith(function() {
  //   return "<li>Replaced with function.</li>"
  // })

  // var firstListItem = $("li:first")
  // $("p:first").replaceWith(firstListItem)
  // $("p").replaceWith(firstListItem)

  // var greenBox = $(".green-box")
  // $(".red-box, .blue-box").replaceWith(greenBox) // mine
  // $(".red-box, .blue-box").replaceWith("<div class='green-box'>More green</div>") // example

  // $("<div class='green-box'>More green</div>").replaceAll(".red-box, .blue-box")


  // 23. Removing Elements and Content
  // $("li").remove()
  // $("form").children().not("input:text, textarea, br").remove()

  // var detachedListItem = $("li").detach()
  // $("#content").append(detachedListItem)
  // Can also do the same with removed, however, if using remove and reattaching in the method below, any event handlers or data associated with the removed item will be lost.
  // Not the case when using detach.
  // var removedListItem = $("li")  // All data and event handlers will be lost.
  // $("#content").append(detachedListItem)

  // $("p:first").empty()  // Empties all content, including children, but keeps element.
  // $(".red-box, .green-box, .blue-box").empty()  // Empties all content, including children, but keeps element.


  // 24. Manipulating Attributes and Properties
  // attr(), prop(), val()
  // var specialLink = $("#special-link")
  // console.log(specialLink.attr("href"))
  // console.log(specialLink.attr("title"))
  //
  // specialLink.attr(specialLink.attr("href", "http://ericklimowich.herokuapp.com"))

  // var checkbox = $("input:checkbox")
  // console.log(checkbox.prop("checked"))
  // console.log(checkbox.attr("checked"))  // Only shows "checked".

  // var textInput = $("input:text")
  // textInput.val("Eric Klimowich")
  // console.log(textInput.val())
  //
  // var rangeInput = $("input[type='range']")
  // console.log(rangeInput.val())


  // 25. Creating an Image Slideshow
  // var galleryImage = $(".gallery").find("img").first()
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ]
  //
  // var i = 0
  // setInterval(function() {
  //   i = (i + 1) % images.length
  //   galleryImage.fadeOut(function() {
  //     $(this).attr("src", images[i])
  //     $(this).fadeIn()
  //   })
  //   console.log(galleryImage.attr("src"))
  // }, 2000)



  // Section 5: Manipulating the DOM II – Changing Element Data and CSS

  // 26. Changing the CSS Properties of Elements
  // $(".gallery").css("display", "none")  // .hide()

  // var redBox = $(".red-box")
  // console.log(redBox.css("width"))
  // console.log(redBox.width())

  // redBox.css("background-color", "#AA7700")
  // $("p").css("font-size", "18px")
  // redBox.css("width", "+=20px")

  // var properties = $("p").css(["font-size", "line-height", "color"])
  // console.log(properties)
  // console.log(properties["line-height"])

  // redBox.css("user-select", "none")
  // redBox.css("user-select", function() {
  //   return "none"
  // })


  // 27. Adding or Removing CSS Classes
  // $("a").addClass("fancy-link")  // class"...""
  // $("p:first").addClass("large emphasize")
  //
  // $("li li").addClass(function(index) {
  //   $(this).addClass("item-" + (index + 1))
  // })
  //
  // $("div").addClass(function(index, currentClass) {
  //   if (currentClass === "dummy") {
  //     return "red-box"
  //   }
  // })

  // $(".red-box").removeClass("red-box").addClass("blue-box")
  // $(".dummy").removeClass("dummy").addClass("green-box")


  // 28. Changing the Data of an Element
  // var gallery = $(".gallery")
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ]
  // gallery.data("availableImages", images)
  // console.log(gallery.data("availableImages"))
  // gallery.data("name", "The Awesome Gallery")
  // console.log(gallery.data())
  // gallery.removeData("name")
  // console.log(gallery.data())
  //
  // var firstPar = $("p:first")
  // console.log(firstPar.data("mydata"))


  // 29. Retrieving and Changing the Content of an Element
  // text(), html()
  // var firstPar = $("p:first")
  // console.log(firstPar.text())
  // console.log(firstPar.html())
  // console.log($("p").html())  // If you select multiple elements, it will only select the first.

  // firstPar.text("<strong>Hello</strong>World!")
  // firstPar.html("<strong>Hello</strong> World!")

  // firstPar.text(firstPar.text() + " This was appended.")
  // firstPar.html(firstPar.html() + " This was appended.")



  // Section 6: Events I ‒ Handling Mouse Events & Keyboard Events

  // 31. Adding Click Handlers
  $("#btn-click").click(function(event) {
    console.log(event)
    alert("Button was clicked")
  })

  $(".red-box").click(function() {
    $(this).fadeTo(1000, 0.5)
  })
  $(".red-box").click()  // Use to automatically trigger your click event if you need to.
});
