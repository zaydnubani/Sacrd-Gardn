const flora = document.getElementsByClassName('flora');
const nft = document.getElementsByClassName('nft');

for( let i=0 ; i < flora.length ; i++ ){
    // grabs height of screen
    var size = screen.height;

    console.log(size);

    // applies frame size of 50% of the screen
    flora[i].style = `height: ${size*.5}px;`
};

for( let i=0 ; i < nft.length ; i++ ){
    // backgrounds array
    const backgrounds = [
        'B6.png'
        ,
        'B21.png'
        ,
        'B24.png'
        ,
        'B26.png'
    ];

    // applies a random background to each nft
    nft[i].style = `background-image: url('/images/backgrounds/body/${backgrounds[Math.floor(Math.random() * backgrounds.length)]}'); order: ${Math.floor(Math.random() * nft.length)}`;

}