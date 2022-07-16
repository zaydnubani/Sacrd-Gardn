const popup = document.getElementsByClassName('popup');

for(let i=0; i<popup.length; i++){

    const backgrounds_body = [
        'B6.png'
        ,
        'B21.png'
        ,
        'B24.png'
        ,
        'B26.png'
    ];

    const nft = document.getElementsByClassName('nft');

    for( let i=0; i<nft.length; i++ ){
        nft[i].style = 'opacity: 0.25;';
    }

    popup[i].style = `background-image: url('/images/backgrounds/body/${backgrounds_body[Math.floor(Math.random() * backgrounds_body.length)]}');`;

    popup[i].children[0].addEventListener('click', () => {
        popup[i].style = 'opacity:0; top:-250%';
        for( let i=0; i<nft.length; i++ ){
            nft[i].style = 'opacity: 1;';
        }
    });

};