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
  // $("#btn-click").click(function(event) {
  //   console.log(event)
  //   alert("Button was clicked")
  // })
  //
  // $(".red-box").click(function() {
  //   $(this).fadeTo(1000, 0.5)
  // })
  // $(".red-box").click()  // Use to automatically trigger your click event if you need to.


  // 32. Adding Hover Handlers
  // :hover
  // $("#btn-hover").hover(function() {
  //   alert("Button was hovered.")
  // })
  //
  // $(".green-box").hover(function() {
  //   $(this).text("I was hovered")
  // })


  // 33. Adding MouseEnter & MouseLeave Handlers
  // var blueBox = $(".blue-box")
  // blueBox.mouseenter(function() {
  //   $(this).stop().fadeTo(500, 0.7)
  // })
  // blueBox.mouseleave(function() {
  //   $(this).stop().fadeTo(500, 1)
  // })

  // hover(handlerIn, handlerOut)
  // blueBox.hover(function() {
  //   $(this).stop().fadeTo(500, 0.7)
  // }, function() {
  //   $(this).stop().fadeTo(500, 1)
  // })
  // Preferred method.


  // 34. Adding the Same Handler for Multiple Events
  // .on()
  // .on("click", function() { ... })
  // $("html").on("click keydown", function() {
  //   console.log("Mouse was clicked or key was pressed.")
  // })

  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ]
  // var i = 0
  // $(".gallery").find("img").on("click", function() {
  //   i = (i + 1) % images.length
  //   $(this).fadeOut(function() {
  //     $(this).attr("src", images[i]).fadeIn()
  //   })
  // })


  // 35. Modularizing Event Handlers (No More Inline Functions)
  // function logEvent() {
  //   console.log("Mouse was clicked or key was pressed.")
  // }
  //
  // $("html").on("click keydown", logEvent)

  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ]
  //
  // var i = 0
  //
  // var galleryImage = $(".gallery").find("img")
  //
  // function changeGalleryImage() {
  //   i = (i + 1) % images.length
  //   galleryImage.fadeOut(function() {
  //     galleryImage.attr("src", images[i]).fadeIn()
  //   })
  // }
  //
  // galleryImage.on("click", changeGalleryImage)


  // 36. Delegated Events
  // $("p").click(function() {
  //   $(this).slideUp()
  // })
  // $("#content").append("<p>This is a dynamically added paragraph.</div>")

  // Delegated events
  // $("#content").on("click", "p", function() {
  //   $(this).slideUp()
  // })
  // $("#content").append("<p>This is a dynamically added paragraph.</div>")
  //
  // $("body").on("mouseenter", "li", function() {
  //   $(this).css("color", "red")
  // })


  // 37. Passing Additional Data to Events
  // $("#btn-click").click({
  //   user: "Eric",
  //   domain: "ericklimowich.herokuapp.com"
  // }, function(event) {
  //   greetUser(event.data)
  // })
  //
  // function greetUser(userData) {
  //   username = userData.user || "Anonymous"
  //   userDomain = userData.domain || "example.com"
  //   alert(`Welcome back, ${username} from ${userDomain}!`)
  // }


  // 38. Creating an Image Gallery with Lightbox Preview
  // var galleryItems = $(".gallery").find("img")
  // galleryItems.css("width", "32%").css("opacity", "0.7")
  //
  // galleryItems.mouseenter(function() {
  //   $(this).stop().fadeTo(500, 1)
  // })
  //
  // galleryItems.mouseleave(function() {
  //   $(this).stop().fadeTo(500, 0.7)
  // })
  //
  // galleryItems.click(function() {
  //   var source = $(this).attr("src")
  //   var image = $("<img>").attr("src", source).css("width", "100%")
  //   $(".lightbox").empty().append(image).fadeIn(2000)
  // })
  //
  // $(".lightbox").click(function() {
  //   $(this).stop().fadeOut(2000)
  // })


  // 39. Handling KeyDown & KeyUp Events
  // keypress() = EVIL
  // $("html").keydown(function(event) {
  //   console.log(event.which)
  // })

  // var ARROW_RIGHT = 39
  // $("html").keydown(function(event) {
  //   if (event.which === ARROW_RIGHT) {
  //     $(".blue-box").stop().animate({
  //       marginLeft: "+=10px"
  //     }, 50)
  //   }
  // })



  // Section 7: Events II ‒ Forms

  // 40. The Focus & Blur Events
  // var inputFields = $("input:text, input:password, textarea")
  // inputFields.focus(function() {
  //   $(this).css("box-shadow", "0 0 4px gray")
  // })
  //
  // inputFields.blur(function() {
  //   $(this).css("box-shadow", "none")
  // })
  //
  // $("#name").blur(function() {
  //   var text = $(this).val()
  //   if (text.length < 3) {
  //     $(this).css("box-shadow", "0 0 4px red")
  //   } else {
  //     $(this).css("box-shadow", "0 0 4px green")
  //   }
  // })


  // 41. Using the Change Event
  // $("#checkbox").change(function() {
  //   var isChecked = $(this).is(":checked")  // .prop("checked")
  //   if (isChecked) {
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px green")
  //   } else {
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px red")
  //   }
  // })
  //
  // $("#selection").change(function() {
  //   var selectedOption = $(this).find(":selected").text()
  //   alert(selectedOption)
  // })


  // 42. Handling the Submit Event
  // $("#form").submit(function(event) {
  //   var textarea = $("#message")
  //   if (textarea.val().trim() === "") {
  //     textarea.css("box-shadow", "0 0 4px red")
  //     event.preventDefault()
  //   } else {
  //     // form will be submitted
  //   }
  // })


  // 43. Complete Form Validation on Submit
  // $("#form").submit(function(event) {
  //   var name = $("#name").val()
  //   var password = $("#password").val()
  //   var message = $("#message").val()
  //   var isChecked = $("#checkbox").is(":checked")
  //
  //   validateNameField(name, event)
  //   validatePasswordField(password, event)
  //   validateMessageField(message, event)
  //   validateCheckboxField(isChecked, event)
  // })
  //
  // function validateNameField(name, event) {
  //   if (!isValidName(name)) {
  //     $("#name-feedback").text("Please enter at least 2 characters.")
  //     event.preventDefault()
  //   } else {
  //     $("#name-feedback").text("")
  //   }
  // }
  //
  // function isValidName(name) {
  //   return name.length >= 2
  // }
  //
  // function validatePasswordField(password, event) {
  //   if (!isValidPassword(password)) {
  //     $("#password-feedback").text("The password should have at least 6 characters and contain a number.")
  //     event.preventDefault()
  //   } else {
  //     $("#password-feedback").text("")
  //   }
  // }
  //
  // function isValidPassword(password) {
  //   return password.length >= 6 && /.*[0-9].*/.test(password)
  // }
  //
  // function validateMessageField(message, event) {
  //   if (!isValidMessage(message)) {
  //     $("#message-feedback").text("Please enter a message.")
  //     event.preventDefault()
  //   } else {
  //     $("#message-feedback").text("")
  //   }
  // }
  //
  // function isValidMessage(message) {
  //   return message.trim() !== ""
  // }
  //
  // function validateCheckboxField(isChecked, event) {
  //   if (!isChecked) {
  //     $("#checkbox-feedback").text("Please agree to this.")
  //     event.preventDefault()
  //   } else {
  //     $("#checkbox-feedback").text("")
  //   }
  // }


  // 44. Fast Feedback Form
  // var form = $("#form")
  // enableFastFeedback(form)
  //
  // form.submit(function(event) {
  //   var name = $("#name").val()
  //   var password = $("#password").val()
  //   var message = $("#message").val()
  //   var isChecked = $("#checkbox").is(":checked")
  //
  //   validateNameField(name, event)
  //   validatePasswordField(password, event)
  //   validateMessageField(message, event)
  //   validateCheckboxField(isChecked, event)
  // })
  //
  // function enableFastFeedback(formElement) {
  //   var nameInput = formElement.find("#name")
  //   var passwordInput = formElement.find("#password")
  //   var messageInput = formElement.find("#message")
  //   var checkboxInput = formElement.find("#checkbox")
  //
  //   nameInput.blur(function(event) {
  //     var name = $(this).val()
  //     validateNameField(name, event)
  //
  //     if (!isValidName(name)) {
  //       $(this).css({ "box-shadow": "0 0 4px red", "border": "1px solid red" })
  //     } else {
  //       $(this).css({ "box-shadow": "0 0 4px green", "border": "1px solid green" })
  //     }
  //   })
  //
  //   passwordInput.blur(function(event) {
  //     var password = $(this).val()
  //     validatePasswordField(password, event)
  //
  //     if (!isValidPassword(password)) {
  //       $(this).css({ "box-shadow": "0 0 4px red", "border": "1px solid red" })
  //     } else {
  //       $(this).css({ "box-shadow": "0 0 4px green", "border": "1px solid green" })
  //     }
  //   })
  //
  //   messageInput.blur(function(event) {
  //     var message = $(this).val()
  //     validateMessageField(message, event)
  //
  //     if (!isValidMessage(message)) {
  //       $(this).css({ "box-shadow": "0 0 4px red", "border": "1px solid red" })
  //     } else {
  //       $(this).css({ "box-shadow": "0 0 4px green", "border": "1px solid green" })
  //     }
  //   })
  //
  //   checkboxInput.change(function(event) {
  //     var isChecked = $(this).is(":checked")  // or prop("checked")
  //     validateCheckboxField(isChecked, event)
  //
  //     if (!isChecked) {
  //       $(this).add("label[for='cb']").css({ "box-shadow": "0 0 4px red", "border": "1px solid red" })
  //     } else {
  //       $(this).add("label[for='cb']").css({ "box-shadow": "0 0 4px green", "border": "1px solid green" })
  //     }
  //   })
  //
  //
  // }
  //
  // function validateNameField(name, event) {
  //   if (!isValidName(name)) {
  //     $("#name-feedback").text("Please enter at least 2 characters.")
  //     event.preventDefault()
  //   } else {
  //     $("#name-feedback").text("")
  //   }
  // }
  //
  // function isValidName(name) {
  //   return name.length >= 2
  // }
  //
  // function validatePasswordField(password, event) {
  //   if (!isValidPassword(password)) {
  //     $("#password-feedback").text("The password should have at least 6 characters and contain a number.")
  //     event.preventDefault()
  //   } else {
  //     $("#password-feedback").text("")
  //   }
  // }
  //
  // function isValidPassword(password) {
  //   return password.length >= 6 && /.*[0-9].*/.test(password)
  // }
  //
  // function validateMessageField(message, event) {
  //   if (!isValidMessage(message)) {
  //     $("#message-feedback").text("Please enter a message.")
  //     event.preventDefault()
  //   } else {
  //     $("#message-feedback").text("")
  //   }
  // }
  //
  // function isValidMessage(message) {
  //   return message.trim() !== ""
  // }
  //
  // function validateCheckboxField(isChecked, event) {
  //   if (!isChecked) {
  //     $("#checkbox-feedback").text("Please agree to this.")
  //     event.preventDefault()
  //   } else {
  //     $("#checkbox-feedback").text("")
  //   }
  // }


  // 45. What is Ajax?
  // $.get(), $.post(), $.ajax(), $.getJSON()


  // 46. Fetching a Server File with jQuery
  // $.load()  Specifically designed to retrieve files from your own server.
  // $("#code").load("js/script.js")

  // $("#code").load("js/script.js", function(response, status) {
  //   if (status == "error") {
  //     alert("Could not find file.")
  //   }
  //   console.log(response)
  // })


  // 47. Retrieving Flickr Images Through the Flickr API (+Understanding JSON)
  // JSON
  // {
  //   key: value,
  //   key2: value2
  // }

  // $.getJSON()
  // var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
  // // added "?jsoncallback=?"
  // $.getJSON(flickrApiUrl, {
  //   // options....
  //   tags: "sun, beach",
  //   tagmode: "any",
  //   format: "json"
  // }).done(function(data) {
  //   // success
  //   console.log(data)
  //   $.each(data.items, function(index, item) {
  //     console.log(item)
  //     $("<img>").attr("src", item.media.m).appendTo("#flickr")
  //
  //     if (index === 4) {
  //       return false
  //     }
  //   })
  // }).fail(function() {
  //   // failure
  //   alert("Ajax call failed.")
  // })


  // 48. Retrieving Pokémon Data from The PokéAPI (Or Star Wars)
  // $.getJSON()
  // var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1"
  //
  // $.getJSON(pokeapiUrl).done(function(data) {
  //   console.log(data)
  //   $.each(data.pokemon_species, function(index, pokemon) {
  //     var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  //     var par = $("<p>").html(`Pokemon species no. ${index + 1} is ${name}.`)
  //     par.appendTo("#pokemon")
  //   })
  // }).fail(function() {
  //   console.log("Request to Pokeapi failed.")
  // }).always(function() {
  //   console.log("Pokemon is awesome!")
  // })


  // 49. Improving the Pokédex
  var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1"
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/"

  $.getJSON(pokeapiUrl).done(function(data) {
    console.log(data)
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name))
      var par = $("<p>").html(`Pokemon species no. ${index + 1} is `).append(link)

      link.click(function(event) {
        event.preventDefault()
        $.getJSON(pokemonByName + pokemon.name).done(function(details) {
          console.log(details)
          var pokemonDiv = $("#pokemon-details")
          pokemonDiv.empty()
          pokemonDiv.append("<h2>" + name + "</h2")
          pokemonDiv.append(`<img src='${details.sprites.front_default}'>`)
          pokemonDiv.append(`<img src='${details.sprites.back_default}'>`)
          pokemonDiv.append(`<img src='${details.sprites.front_shiny}'>`)
          pokemonDiv.append(`<img src='${details.sprites.back_shiny}'>`)
        })
      })

      par.appendTo("#pokemon")

    })
  }).fail(function() {
    console.log("Request to Pokeapi failed.")
  }).always(function() {
    console.log("Pokemon is awesome!")
  })
});
