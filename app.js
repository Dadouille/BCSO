const dropdown = document.querySelector(".dropdown");
const btnDrop = document.querySelector(".bloc-top");


let toggleIndex = 0;

btnDrop.addEventListener('click', () => {

    //console.log(dropdown.scrollHeight);

    if(toggleIndex === 0){
        dropdown.style.height = `${dropdown.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown.style.height = `${btnDrop.scrollHeight}px`;
        toggleIndex--;
    }

})

const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})