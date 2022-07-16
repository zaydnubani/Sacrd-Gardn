const faq = document.getElementsByClassName('faq');

for(let i=0;i<faq.length;i++){
    const backgrounds = [
        'B6.png'
        ,
        'B21.png'
        ,
        'B24.png'
        ,
        'B26.png'
    ];

    faq[i].children[0].style = `background-image: url('/images/backgrounds/body/${backgrounds[Math.floor(Math.random() * backgrounds.length)]}');`;

    faq[i].children[0].children[1].addEventListener('click', () => {
        faq[i].children[1].style = 'visibility: visibile; width:100%;';
    });

    faq[i].children[1].children[1].addEventListener('click', () => {
        faq[i].children[1].style = 'visibility: hidden; width:0%;';
    });

};

