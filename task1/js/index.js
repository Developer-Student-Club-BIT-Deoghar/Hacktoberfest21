(function(){
    const divs = document.getElementsByClassName('card__image');
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        const img = div.getElementsByTagName('img')[0]
                        .getAttribute('src');
        div.style.backgroundImage = 'url(' + img + ')';
    }
}());

