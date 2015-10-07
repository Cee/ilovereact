function animateLogo() {
	TweenMax.fromTo(".react-logo", 2, {
		css: {
			y: "-10px",
		}
	}, {
		css: {
			y: "10px",
		},
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
	});
}

function animateRobot() {
	var t = new TimelineMax({yoyo: false, repeat: -1});
	t.to("#android-robot", 1, {rotation: "-=15deg"})
		.to("#android-robot", 1, {rotation: "+=15deg"})
		.to("#android-robot", 1, {rotation: "+=15deg"})
		.to("#android-robot", 1, {rotation: "-=15deg"});
}

function updateSliderControl() {
	// get all the slider links
	var links = document.querySelectorAll("#slider-control a");

	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		
		// Get the section pointed to by the link
		var section = document.querySelector(link.getAttribute("href"));
		var sectionTop = section.offsetTop;
		var sectionBottom = sectionTop + section.offsetHeight;
		
		if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
			link.className = "active";
		} else {
			link.className = "";
		}
	}
}

function scrollToElement(element) {
	var topOfElement = element.offsetTop;
	
	TweenMax.to(window, 1, {
		scrollTo: {
			y: topOfElement,
		},
		ease: Power2.easeInOut,
	});
}

function addSmoothScrolling() {
	var links = document.querySelectorAll("#slider-control a");

	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		
		link.addEventListener("click", function(event) {
			event.preventDefault();
			var href = this.getAttribute("href");
			scrollToElement(document.querySelector(href));
		});
	}
}

function addScrollMagic() {
	var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onEnter",
		duration: "100%"
    }).setTween(".bg-overlay", {
        opacity: 1
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onEnter",
        duration: "100%"
    }).setTween("#iphone-overlay", 1, { width: "50%", y: 0 })
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onLeave",
        duration: "100%"
    }).setPin("#iphone-overlay")
      .addTo(controller);
}

// Start animating when the page is ready.
window.onload = function() {
	animateLogo();
	animateRobot();
	updateSliderControl();
	addSmoothScrolling();
	addScrollMagic();
};

window.onscroll = function() {
	updateSliderControl();
}