// grabs all <main> tags
const main = document.getElementsByTagName('main');

// loops through main tags
for(let i=0; i<main.length;i++){

        // array with background filenames
    const backgrounds_body = [
        'B6.png'
        ,
        'B21.png'
        ,
        'B24.png'
        ,
        'B26.png'
    ];


    // changes main background color
    main[i].style = `background-image: url('/images/backgrounds/body/${backgrounds_body[Math.floor(Math.random() * backgrounds_body.length)]}');`;

    console.log(main[i].children[1].children[0].children[0].children[1]);

    // opens nav menu
    main[i].children[1].children[0].children[0].children[1].addEventListener('click', () => {
        main[i].children[0].style = "width: 250px; opacity: 1;";
    });

    // closes nav menu
    main[i].children[0].children[1].addEventListener('click', () => {
        main[i].children[0].style = "width:0; opacity:0;";
    });

    console.log(window.innerHeight);

    main[i].children[1].style = `height: ${(window.innerHeight)*0.2}px`;

    main[i].children[3].style = `height: ${(window.innerHeight)*0.2}px`;


};


