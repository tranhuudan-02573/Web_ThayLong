const eName = document.getElementById("name-horizontal");
const ePhone = document.getElementById("phone-horizontal");
const eEmail = document.getElementById("email-horizontal");
const eSubmit =  document.getElementById("bnt-submit");
const eFstar =  document.getElementById("forms_star-rating");
const eStarRating =  document.getElementById("star-rating");
const eHiddStar =  document.getElementById("hidd");
const eSelecRating =  document.getElementById("selec-rating");
// bnt on/off
eStarRating.addEventListener('click',()=>{
    visible('d-none','d-block');
});
eHiddStar.addEventListener('click',()=>{
    visible('d-block','d-none');
});
// bnt submit
eSubmit.addEventListener('click',()=>{
    eFstar.setAttribute('onsubmit','return check()');
});
    
for (let index = 0; index < eSelecRating.children.length; index++) {
    eSelecRating.children[index].addEventListener('mousemove',()=>{
        setStar(eSelecRating.children[index].value);
     });
}
function setStar(e){
    for (let index = 0; index < e; index++) {
        eSelecRating.children[index].children[0].classList.remove('fa-regular');
    }
    for (let index = e; index <5; index++) {
        eSelecRating.children[index].children[0].classList.add('fa-regular');
    }
}
function visible(dsplay1,dsplay2){
    eFstar.classList.remove(dsplay1);
    eFstar.classList.add(dsplay2);
}
function star(){

}
function check(){
    const emptyName = eName.value+''.length==0;
    if(!emptyName && isFormatPhone(ePhone.value) && isFormatEmail(eEmail.value)){
        messBorder('valid',eName,ePhone,eEmail);
        visible('d-block','d-none');
        return true;
}
    if(emptyName) messBorder('invalid',eName);
    if(!isFormatPhone(ePhone.value)) messBorder('invalid',ePhone);
    if(!isFormatEmail(eEmail.value)) messBorder('invalid',eEmail);
    visible('d-none','d-block');
    return false;
}

function messBorder(border,...element){
    element.forEach(e => {
        e.classList.add(border);
    });
}
function isFormatPhone(phone){
    const regexPhone = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
    return regexPhone.test(phone);
}
function isFormatEmail(email){
    const regexName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexName.test(email);
}