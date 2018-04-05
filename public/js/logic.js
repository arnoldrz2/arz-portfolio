// Image slider function starter
$(document).ready(function(){
    $('.slider').slider();
  });

// Show more/Show less function for about me section
if ('querySelector' in document && 
	'addEventListener' in window) {

	var toggleButtons = document.querySelectorAll('.toggle-content');
	var fullTextWrappers = document.querySelectorAll('.fulltext');
	var fullText;
	var toggleButtonText;
	

	[].forEach.call(fullTextWrappers, function(fullTextWrapper) {
		// hide all full text on load
		fullTextWrapper.setAttribute('hidden', true);
	});

	[].forEach.call(toggleButtons, function(toggleButton) {
		// show toggle more buttons
		toggleButton.removeAttribute('hidden');

		// add listener for each button
		toggleButton.addEventListener('click', function () {

			fullTextWrapper = this.parentElement.querySelector('.fulltext');
			toggleButtonText = this.querySelector('.text');

			// change attributes and text if full text is shown/hidden
			if (!fullTextWrapper.hasAttribute('hidden')) {
				toggleButtonText.innerText = 'Show More';
				fullTextWrapper.setAttribute('hidden', true);
				toggleButton.setAttribute('aria-expanded', false);
			} else {
				toggleButtonText.innerText = 'Show Less';
				fullTextWrapper.removeAttribute('hidden');
				toggleButton.setAttribute('aria-expanded', true);
			}
		});
	});
}

// Scroll Smoothing Function
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Email Text Area
$(document).ready(function() {
    $('textarea#body').characterCounter();
  });