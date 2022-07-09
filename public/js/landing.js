
// gallery background

const gifs = ['3.gif','4.gif', '5.gif'];

const landing = document.getElementsByClassName('landing');

for(let i=0; i < landing.length; i++){

    const gifs = ['3.gif','4.gif', '5.gif'];

    landing[i].style = `background-image: url('/images/gifs/${gifs[Math.floor(Math.random() * gifs.length)]}');`
};

    
    


