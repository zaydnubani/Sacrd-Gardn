const message = document.getElementById('b_message');
const banner = document.getElementById('banner');

let b_width = banner.offsetWidth;
console.log(b_width);
let m_width = message.offsetWidth;
console.log(m_width);

let init_position = -(b_width);

setInterval(() => {
    if (init_position >= m_width){
        init_position = -(b_width);
    };

    let difference = init_position-(-1);
    init_position = difference;
    message.style = `position: inherit; right: ${init_position}px;`;
    
},50);


