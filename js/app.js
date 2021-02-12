/*
..........................................................
                             Navbar
............................................................
*/
$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

$(document).on('click', 'li.nav-item', function () {
    $(this).addClass('active').siblings().removeClass('active')
});

/*
..........................................................
                             Button_Up
............................................................
*/
$(document).ready(function () {
    $('.btn_arriba').hide();

    $(window).scroll(() => {
        if ($(this).scrollTop() > 100) {
            $('.btn_arriba').fadeIn(200);
        } else {
            $('.btn_arriba').fadeOut(200);
        }
    });

    $('.btn_arriba').click(() => {
        $('body, html').animate({
            scrollTop: 0
        }, 200);
    })
});

/*
..........................................................
                    JavaScript_ScrollReveal
............................................................
*/

window.sr = ScrollReveal();
sr.reveal('.scrolling-navbar', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*
..........................................................
                    Button_Nocturno
............................................................
*/

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }

});

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}
