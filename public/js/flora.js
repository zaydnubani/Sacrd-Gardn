const popup = document.getElementsByClassName('popup');

localStorage.setItem('popped', false);

const pop = localStorage.getItem('popped');

// need to integrate popup blocker

for(let i=0; i<popup.length; i++){

    const nft = document.getElementsByClassName('nft');
    const img = document.getElementsByClassName('nft img');

    if(pop === 'false'){

        console.log(localStorage.getItem('popped'));

        const backgrounds_body = [
            'B6.png'
            ,
            'B21.png'
            ,
            'B24.png'
            ,
            'B26.png'
        ];


        popup[i].style = `background-image: url('/images/backgrounds/body/${backgrounds_body[Math.floor(Math.random() * backgrounds_body.length)]}');`;

        popup[i].children[0].addEventListener('click', () => {

            localStorage.setItem('popped', true);

            popup[i].style = 'opacity: 0; top: -250%';

            for( let i=0; i<nft.length; i++ ){

                if (nft[i].className === 'nft img'){

                    console.log('img'); 

                    nft[i].style = `opacity: 1; order: ${Math.floor(Math.random() * img.length)};`;

                } else if (nft[i].className === 'nft membership'){

                    console.log('member'); 

                    nft[i].style = `opacity: 1; order: ${Math.floor(Math.random() * 4)}; `;

                }
            };
        });

        for( let i=0; i<nft.length; i++ ){

            if (nft[i].className === 'nft img'){

                nft[i].style = `opacity: 0.5; order: ${Math.floor(Math.random() * img.length)};`;

            } else if (nft[i].className === 'nft membership'){

                nft[i].style = `opacity: 0.5; order: ${Math.floor(Math.random() * 4)}; `;

            }
        }

    } else if (pop === 'true'){

        console.log('popped');

        popup[i].style = 'display:none;';

        for( let i=0; i<nft.length; i++ ){

            if (nft[i].className === 'nft img'){

    
                nft[i].style = `order: ${Math.floor(Math.random() * img.length)};`;
    
            } else if (nft[i].className === 'nft membership'){


                nft[i].style = `order: ${Math.floor(Math.random() * 4)}; `;

            }
        }

    }
};