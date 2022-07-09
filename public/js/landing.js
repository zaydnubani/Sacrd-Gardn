const landing = () => {

    // gallery background

    const gifs = ['3.gif','4.gif', '5.gif'];

    const landing = document.getElementsByClassName('landing');

    for(let i=0; i < landing.length; i++){
        landing[i].style = `background-image: url('/images/gifs/${gifs[Math.floor(Math.random() * gifs.length)]}');`
    }


    // renders background color for landing

    const backgrounds_body = [
        'B6.png'
        ,
        'B21.png'
        ,
        'B24.png'
        ,
        'B26.png'
    ];


    
    // const plants = [
    //     'angels_trumpet.png', 'ayahuasca_leaf.png', 'ayahuasca_vine.png','buddy.png', 'bush.png', 'cactus.png','cotton_cactus.png', 'crack_rose.png', 'flower_bush.png', 'flower_cactus.png', 'Genesis_Blue_Lotus.png', 'kale.png','long_daddy.png', 'mary_jane.png', 'pinkie.png', 'prim_rose.png', 'sticky_icky.png', 'sunny_d.png', 'trap_flower.png', 'trumpet_flower.png', 'yellow_jawn.png'
    // ];

};

landing();
