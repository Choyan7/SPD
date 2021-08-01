// Initialize menu
setTimeout(() => {
    var elem = document.getElementsByClassName('burger')[0];
    if (elem.length) {
        elem.addEventListener('click', () => {
            document.getElementsByClassName('nav')[0].classList.add("open");
            var elemClose = document.getElementsByClassName('close-menu')[0];
            elemClose.addEventListener('click', () => {
                document.getElementsByClassName('nav')[0].classList.remove("open");
            });
    
            var elemnavs = document.getElementsByClassName('nav-item');
            for (var i = 0; i < elemnavs.length; i++) {
                elemnavs[i].addEventListener('click', () => {
                    document.getElementsByClassName('nav')[0].classList.remove("open");
                })
            }
    
        });
    }
}, 1000)

// initialize slider
if ($('.glide').length) {
    const glide = new Glide('.glide', {autoplay: 4000});

    glide.mount();
}

// Initialize Player
if ($('#player').length) { 
    const player = new Plyr('#player', {
        "controls": []
    });
    
    $('#play-button').click(function (e) {
        e.preventDefault();
    
        $('.about-section').hide();
        $('#player').show();
    
        player.poster = jaa.poster;
        player.play();
    });
}

$(document).ready(function() {
    $(".password-mask, .password-mask-confirmation").click(function() {
        var elementID = this.id.replace('_mask','');
        if($('#'+elementID).attr('type') == 'password')
        {
            $('#'+elementID).prop("type", "text");
            $('#'+this.id).toggleClass('password-mask-url password-unmask-url');
        }
        else
        {
            $('#'+elementID).prop("type", "password");
            $('#'+this.id).toggleClass('password-unmask-url password-mask-url');
        }

    });
});
