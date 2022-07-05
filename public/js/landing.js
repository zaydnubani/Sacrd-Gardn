const landing = () => {

    // array on standby

    const nfts = [
        'AngelsTrumpet.jpg', 'Ayahuasca.jpg', 'Blue_Lotus.jpg', 'Cannabis_female.jpg', 'Cannabis_male.jpg', 'Chacruna.jpg', 'DevlisTrumpet.jpg', 'Ice_Plant_flower.jpg', 'IcePlant.jpg', 'Kanna.jpg', 'Kratom.jpg', 'Morning_Glory.jpg', 'Nicotiana.jpg', 'Passion_Flower.jpg', 'peyote_no_flower.jpg', 'Peyote.jpg', 'Poppy.jpg','Salvia.jpg', 'SanPedro_Crestata.jpg'
    ];

    const gifs = ['frame1.gif', 'frame2.gif'];

    const landing_frame = document.getElementById('landing_frame');
    const frame_background_random = Math.floor(Math.random() * gifs.length);

    landing_frame.style = `background-image: url('/images/gifs/${gifs[frame_background_random]}');`;

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

    // id='gallery' items on landing
    
    const plants = [
        'angels_trumpet.png', 'ayahuasca_leaf.png', 'ayahuasca_vine.png','buddy.png', 'bush.png', 'cactus.png','cotton_cactus.png', 'crack_rose.png', 'flower_bush.png', 'flower_cactus.png', 'Genesis_Blue_Lotus.png', 'kale.png','long_daddy.png', 'mary_jane.png', 'pinkie.png', 'prim_rose.png', 'sticky_icky.png', 'sunny_d.png', 'trap_flower.png', 'trumpet_flower.png', 'yellow_jawn.png'
    ];

    plants.forEach((plant) => {
        const gallery = document.getElementById('gallery');

        const frame = document.createElement('div');
        const div = document.createElement('div');
        const a = document.createElement('a');
        const img = document.createElement('img');
        
        const frames = [
            `background-image: url('/images/frames/frame1.png'); background-position: top;
            background-size: 100%;
            background-repeat: no-repeat;`
        , 
            `background-image: url('/images/frames/frame2.png');background-position: right;
            background-size: 60%;
            background-repeat: no-repeat;`
        , 
            `background-image: url('/images/frames/frame3.png');background-position: left;
            background-size: 60%;
            background-repeat: no-repeat;`
        , 
            `background-image: url('/images/frames/frame4.png');background-position: bottom;
            background-size: 120%;
            background-repeat: no-repeat;`
        ];

        const backgrounds_card = [
            'B14.png'
            ,
            'B17.png'
            ,
            'B23.png'
            ,
            'B25.png'
            ,
            'B31.png'
        ];

        const frame_random = Math.floor(Math.random() * frames.length);
        const background_random = Math.floor(Math.random() * backgrounds_card.length);

        frame.style = `background-image: url('/images/backgrounds/cards/${backgrounds_card[background_random]}');`;

        div.style = `order: ${Math.floor(Math.random() * plants.length)}; ${frames[frame_random]}`;
    
        a.href = '#';
        img.className = 'animate__animated animate__pulse animate__infinite	infinite';

        // img.addEventListener('mouseover', () => {
        //     img.className = 'animate__animated animate__flip animate__infinite	infinite'
        // });
        // img.addEventListener('mouseout', () => {
        //     img.className = 'animate__animated animate__pulse animate__infinite	infinite'
        // });

        img.src = `/images/plants/${plant}`;

        a.appendChild(img);
        div.appendChild(a);
        frame.appendChild(div);
        gallery.appendChild(frame);
    });

};

landing();

