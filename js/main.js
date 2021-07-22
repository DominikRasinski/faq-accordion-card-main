const button = document.querySelectorAll('.btn-arrow');
const hiddenParagraph = document.querySelectorAll('.hiddenP');

// console.log(button);

for(const el of button){
    el.addEventListener("click", e =>{
        e.target.classList.toggle("btn-rotate");
        e.target.style.transition = '.2s';
        e.target.closest('.showP').classList.toggle('showP--fontWeight');
        console.log(e.currentTarget);
        showHiddenParagraph(e);
    });
}
function showHiddenParagraph(event){
    event.preventDefault();

    let paragraphVisible = event.currentTarget.closest('.showP');
    console.log(paragraphVisible);

    let paragraphHidden = paragraphVisible.nextElementSibling.classList.toggle("showParagraph");
    console.log(paragraphHidden);
}
