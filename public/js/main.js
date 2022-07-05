const background_color = () => {

    const backgrounds_body = [
        'B6.png'
        ,
        'B21.png'
        ,
        'B24.png'
        ,
        'B26.png'
    ];

    const main = document.getElementById('main')
    const nav_open = document.getElementById('openbtn');

    const background_random = Math.floor(Math.random() * backgrounds_body.length);
    
    nav_open.style = `background-image: url('/images/backgrounds/body/${backgrounds_body[0]}');`;
    main.style = `background-image: url('/images/backgrounds/body/${backgrounds_body[background_random]}');`;

};

background_color();


