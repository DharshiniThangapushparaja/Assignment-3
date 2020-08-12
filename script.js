// initialise scroll spy
$('body').scrollspy({
    target: '#mainNavbar',
    });
// smooth scrolling
$('#mainNavbar a').on('click',function(event){
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
       
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        }
        )
    }
});