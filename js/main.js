const button = document.querySelectorAll('.btn-arrow');
const hiddenParagraph = document.querySelectorAll('.hiddenP');

for(const el of button){
    el.addEventListener("click", e =>{
        e.target.classList.toggle("btn-rotate");
        e.target.style.transition = '.2s';
        e.target.closest('.showP').classList.toggle('showP--fontWeight');
        showHiddenParagraph(e);
    });
}
function showHiddenParagraph(event){
    event.preventDefault();

    let paragraphVisible = event.currentTarget.closest('.showP');

    let paragraphHidden = paragraphVisible.nextElementSibling.classList.toggle("showParagraph");
}
