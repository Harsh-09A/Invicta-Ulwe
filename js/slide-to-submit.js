// SLide to whatsapp

$(".slide-submit button")
  .draggable({
    cancel: false,
    containment: "parent",
    axis: "x",
    stop: function () {
      console.log($(this).parent().width());
      console.log($(this).position().left);
      if ($(this).parent().width() / 2 < $(this).position().left + 100) {
        // window.open(
        // 	'https://api.whatsapp.com/send?phone=+919236300200&amp;text=I’m interested in the Godrej Bhandup project. Please send brochure and price details.',
        // 	'_blank' // <- This is what makes it open in a new window.
        //   );
        // alert();
        //   $('#whatsappClick button').trigger('click');
        //   $('.whatsappClickClass').trigger('click');
        //wa.me/+919765277792?text=I'm%20interested%20in%20your%20car%20for%20sale
        https: location.href =
          "https://wa.me/+917977534717?text=I'm Interested In Invicta Ulwe Project. Please Send Brochure And Price Details.";

        $(this).next().css({ "margin-left": 0 }).text("Launching WhatsApp");
        $(this).draggable("false");
        $(this).closest("form").submit();
        $(".slide-submit button").css("left", "0px");
      } else {
        $(this).css({ left: 0 });
        //   alert()
      }
    },
  })
  .on("click", function () {
    return false;
    alert();
  });

document.addEventListener("touchstart", touchHandler, true);
document.addEventListener("touchmove", touchHandler, true);
document.addEventListener("touchend", touchHandler, true);
document.addEventListener("touchcancel", touchHandler, true);
function touchHandler(event) {
  var touch = event.changedTouches[0];

  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(
    {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
    }[event.type],
    true,
    true,
    window,
    1,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    false,
    false,
    false,
    false,
    0,
    null
  );

  touch.target.dispatchEvent(simulatedEvent);
  //   event.preventDefault();
}
