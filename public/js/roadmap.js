const container = document.getElementsByClassName('container primary');

for(let i=0; i<container.length; i++){

    container[i].children[0].children[1].addEventListener('click', (event) => {

        let state = container[i].children[0].children[1].value;

        if (state === 'expand') {
            
            // changes the expand buttons text content
            container[i].children[0].children[1].textContent = '-';

            // changes the expand buttons value
            container[i].children[0].children[1].value = 'contract';
            
            // sets a style for the description container
            container[i].children[1].style = `visibility: visible; opacity: 1; padding: 1%; height: ${container[i].children[1].children[0].clientHeight}px;`;
        
        } else if (state === 'contract'){

            container[i].children[0].children[1].textContent = '+';
    
            container[i].children[0].children[1].value = 'expand';
                
            container[i].children[1].style = `visibility: hidden; opacity: 0; height: 0px; padding: 0;`;
            
        }

    });

}

const tertiary = document.getElementsByClassName('container tertiary');

for(let i=0; i<tertiary.length; i++){

    tertiary[i].children[0].children[1].addEventListener('click', (event) => {

        let state = tertiary[i].children[0].children[1].value;

        if (state === 'expand') {

            // logs the parent element
            console.log(tertiary[i] + ' parent element');

            // logs description primary's first child height
            console.log(tertiary[i].clientHeight + ' childs initial height');

            // logs the parent elements height
            console.log(tertiary[i].parentElement.clientHeight + ' parent initial height');

            // store the parent elements initila height
            localStorage.setItem("child", tertiary[i].clientHeight);
            
            // changes the expand buttons text content
            tertiary[i].children[0].children[1].textContent = '-';

            // changes the expand buttons value
            tertiary[i].children[0].children[1].value = 'contract';

            tertiary[i].parentElement.parentElement.style = `height: ${tertiary[i].parentElement.clientHeight + tertiary[i].clientHeight + tertiary[i].children[1].children[0].clientHeight}px; padding: 1%;`;
            
            // sets a style for the description container
            tertiary[i].children[1].style = `visibility: visible; opacity: 1; height: ${tertiary[i].children[1].children[0].clientHeight}px;`;
        
        } else if (state === 'contract'){

            console.log(tertiary[i].parentElement.clientHeight + ' parent following height');

            // logs description primary's first child height
            console.log(tertiary[i].clientHeight + ' childs following height');

            tertiary[i].children[0].children[1].textContent = '+';
    
            tertiary[i].children[0].children[1].value = 'expand';

            tertiary[i].parentElement.parentElement.style = `height: ${tertiary[i].parentElement.clientHeight - (tertiary[i].clientHeight - localStorage.getItem("child"))}px; padding: 1%;`;

                
            tertiary[i].children[1].style = `visibility: hidden; opacity: 0; height: 0px;`;
            
        }

    });

}
