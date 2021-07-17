const button = document.querySelectorAll('.btn-arrow');
const hiddenParagraph = document.querySelectorAll('.hiddenP');

// console.log(button);

for(const el of button){
    el.addEventListener("click", e =>{
        e.target.classList.toggle("btn-rotate");
        e.target.style.transition = '.2s';
    });
}
