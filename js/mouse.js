if (window.matchMedia("(min-width: 768px)").matches) {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById("mouse-circle");

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    };

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + "px";
        mouseCircle.style.left = revisedMousePosX + "px";
    }
    delayMouseFollow();
}




// text curve start
function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}

$(function() {
    var speed = 1, rotation = 0, scrollLoc = $(document).scrollTop();
    $(window).scroll(function() {
        var newLoc = $(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += diff, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation * speed + "deg)";
        $(".circular_anas").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
})

$$('.circular_anas').forEach(function(el) {
	var NS = "http://www.w3.org/2000/svg";
	
	var svg = document.createElementNS(NS, "svg");
	svg.setAttribute("viewBox", "0 0 100 100");
	
	var circle = document.createElementNS(NS, "path");
	circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
	circle.setAttribute("id", "circle");
	
	var text = document.createElementNS(NS, "text");
	var textPath = document.createElementNS(NS, "textPath");
	textPath.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', '#circle');
	textPath.textContent = el.textContent;
	text.appendChild(textPath);
	
	svg.appendChild(circle);
	svg.appendChild(text);
	
	el.textContent = '';
	el.appendChild(svg);
});
// text curve start






// fixed text curve start


function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}

$(function() {
    var speed = 0.2, rotation = 0, scrollLoc = $(document).scrollTop();
    $(window).scroll(function() {
        var newLoc = $(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += diff, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation * speed + "deg)";
        $(".circular_anasf").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
})

$$('.circular_anasf').forEach(function(el) {
	var NS = "http://www.w3.org/2000/svg";
	
	var svg = document.createElementNS(NS, "svg");
	svg.setAttribute("viewBox", "0 0 100 100");
	
	var circle = document.createElementNS(NS, "path");
	circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
	circle.setAttribute("id", "circle");
	
	var text = document.createElementNS(NS, "text");
	var textPath = document.createElementNS(NS, "textPath");
	textPath.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', '#circle');
	textPath.textContent = el.textContent;
	text.appendChild(textPath);
	
	svg.appendChild(circle);
	svg.appendChild(text);
	
	el.textContent = '';
	el.appendChild(svg);
});

// fixed text curve end








// owl carousel start
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    dots:false,
    autoplay:true,
    autoplatTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// owl carousel start







// prograss bar start
$(function () {
				
    $(".cont").each(function () {
    
        $(this).find(".progress-bar").animate({
        
            width:$(this).attr("data-percent")
        
        },6000);
        
        $(this).find("span").animate({
        
            left:$(this).attr("data-percent")
        
        },6000);
    
    });

});
// prograss bar end








// prelod logo image
// var loader = document.getElementById("prelod");
// loader.style.display="none";
// window.addEventListener("load", function(){
    // loader.style.display="none";

    // var t = document.getElementById("anas-text");
    // t.classList.add("animate__animated animate__zoomIn animate__slow	5s");
// })

$(window).on('load', function(){
    $('#prelod').css('display','none');
    $("#anas-text").addClass("animate__animated animate__zoomIn animate__slow	5s");
    $("#anas-text-2").addClass("animate__animated animate__zoomIn animate__slow	5s");
    $("#anas-text-3").addClass("animate__animated animate__zoomIn animate__slow	9s");
    $("#anas-text-4").addClass("downlod-btn animate__animated animate__slideInUp animate__slow	5s");

})

// prelod logo image end





// preloder section start
const text = document.querySelector('.text p');

text.innerHTML = text.innerText.split("").map(
(char ,i) => 
  `<span style="transform:rotate(${i *8.3}deg)">${char}</span>`
).join("");

// preloder section end






// scroll to top
// Check distance to top and display back-to-top.
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 800 ) {
		$( '.back-to-top' ).addClass( 'show-back-to-top' );
	} else {
		$( '.back-to-top' ).removeClass( 'show-back-to-top' );
	}
});

// Click event to scroll to top.
$( '.back-to-top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 800 );
	return false;
});
// scroll to top


$( '#btn-clicked' ).click( function() {
    alert($(window).width()) ;
});



