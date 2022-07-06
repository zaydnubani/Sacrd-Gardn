const landing = () => {

    // array on standby

    const nfts = [
        'AngelsTrumpet.jpg', 'Ayahuasca.jpg', 'Blue_Lotus.jpg', 'Cannabis_female.jpg', 'Cannabis_male.jpg', 'Chacruna.jpg', 'DevlisTrumpet.jpg', 'Ice_Plant_flower.jpg', 'IcePlant.jpg', 'Kanna.jpg', 'Kratom.jpg', 'Morning_Glory.jpg', 'Nicotiana.jpg', 'Passion_Flower.jpg', 'peyote_no_flower.jpg', 'Peyote.jpg', 'Poppy.jpg','Salvia.jpg', 'SanPedro_Crestata.jpg'
    ];

    // gallery background

    const gifs = ['3.gif','4.gif', '5.gif'];

    const gallery = document.getElementById('gallery');
    const gif_random = Math.floor(Math.random() * gifs.length);

    gallery.style = `background-image: url('/images/gifs/${gifs[gif_random]}');`;

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

    const landing_body = document.getElementById('landing_body');
    const body_background_random = Math.floor(Math.random() * backgrounds_body.length);

    landing_body.style = `background-image: url('/images/backgrounds/body/${backgrounds_body[body_background_random]}');`;
    
    // const plants = [
    //     'angels_trumpet.png', 'ayahuasca_leaf.png', 'ayahuasca_vine.png','buddy.png', 'bush.png', 'cactus.png','cotton_cactus.png', 'crack_rose.png', 'flower_bush.png', 'flower_cactus.png', 'Genesis_Blue_Lotus.png', 'kale.png','long_daddy.png', 'mary_jane.png', 'pinkie.png', 'prim_rose.png', 'sticky_icky.png', 'sunny_d.png', 'trap_flower.png', 'trumpet_flower.png', 'yellow_jawn.png'
    // ];

};

landing();

