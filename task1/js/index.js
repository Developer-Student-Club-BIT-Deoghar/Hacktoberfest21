(function(){
    const divs = document.getElementsByClassName('card__image');
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        const img = div.getElementsByTagName('img')[0]
                        .getAttribute('src');
        div.style.backgroundImage = 'url(' + img + ')';
    }
}());

const hamburger = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.getElementsByClassName('dropdown-li')[0];

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navbarLinks.classList.toggle('dropdown-li-active');
    console.log("toggled")
})
