const team = document.getElementById('team');
const member = document.getElementsByClassName('member');
const bio = document.getElementsByClassName('bio');

for(let i=0;i<member.length;i++){
    const backgrounds = [
        'B6.png'
        ,
        'B21.png'
        ,
        'B24.png'
        ,
        'B26.png'
    ];

    member[i].style = `background-image: url('/images/backgrounds/body/${backgrounds[Math.floor(Math.random() * backgrounds.length)]}');`;

    member[i].children[1].style = `background-image: url('/images/backgrounds/body/${backgrounds[Math.floor(Math.random() * backgrounds.length)]}');`;
    member[i].children[2].style = `background-image: url('/images/backgrounds/body/${backgrounds[Math.floor(Math.random() * backgrounds.length)]}');`;

};

for(let i=0;i<bio.length;i++){
    bio[i].addEventListener('click', (event) => {
        console.log(screen.width);
        event.target.children[0].style = 'display: block;';
        // event.target.children[1].style = 'display: none;';
        event.target.children[1].style = 'display: block;';
        // event.target.text = '';

        event.target.children[0].addEventListener('click', (poke) => {
            event.target.children[0].style = 'display: none;';
            // event.target.children[1].style = 'display: block;';
            event.target.children[1].style = 'display: none;';
            bio[i].style = 'width:10%; height:50%;';
        });

        if(screen.width >= 1400){
            bio[i].style = `width:100%; height:100%; font-size:2rem; overflow-y:scroll; z-index:1; padding:2%;`;
        } else if(screen.width >= 1200) {
            bio[i].style = 'width:100%; height:100%; font-size:1.75rem; overflow-y:scroll; z-index:1; padding:1%';
        }  else if(screen.width >= 992) {
            bio[i].style = 'width:100%; height:100%; font-size:1.5rem; overflow-y:scroll; z-index:1; padding:2%';
        } else if(screen.width >= 768) {
            bio[i].style = 'width:100%; height:100%; font-size:1.25rem; overflow-y:scroll; z-index:1; padding:2%;';
        } else if(screen.width >= 576) {
            bio[i].style = 'width:100%; height:100%; font-size:1rem; overflow-y:scroll; z-index:1; padding:2%;';
        } else if(screen.width >= 360) {
            bio[i].style = 'width:100%; height:100%; font-size:0.75rem; overflow-y:scroll; z-index:1; padding:2%;';
        }
    });
}