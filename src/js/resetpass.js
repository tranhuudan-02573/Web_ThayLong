const eBtnContinue = document.getElementsByClassName('btn-continue');
const eBtnBack = document.getElementsByClassName('btn-back');

const eForm = document.getElementsByClassName('form')[0];
const eStep1 = document.getElementById('email-horizontal');
const eStepper = document.getElementById('horizontal-stepper');
const eOldPass = document.getElementById('password-horizontal');
const eNewPass = document.getElementById('new-password');
const eConFirmPass = document.getElementById('confirm-password');
// btn step1 input[type="email"]:not(.browser-default).invalid 
eBtnContinue[0].addEventListener('click',()=>{
    // if(!isFormatEmail(eStep1.value))return;
    step(0,1);
})
eBtnContinue[1].addEventListener('click',()=>{
    console.log(eOldPass.value)
    if(eOldPass.value=="" || eOldPass.value=='undefined'){
        eOldPass.classList.add('invalid');
        return;
    }
    if(!isFormatPass(eNewPass.value)){
        eNewPass.classList.add('invalid');
        return;    
    }
    if(eConFirmPass.value!=eNewPass.value){
        eConFirmPass.classList.add('invalid');
        return;    
    }
     step(1,2);
});
eBtnBack[0].addEventListener('click',()=>{
    step1Back();
});

function step1Back(){
    eStepper.children[0].classList.remove('step-after');//after
    eStepper.children[1].classList.remove('step-after');
    eStepper.children[1].classList.remove('active');//before
    eForm.children[0].classList.remove('d-none');
    eForm.children[0].classList.add('d-block');
    eForm.children[1].classList.remove('d-block');
    eForm.children[1].classList.add('d-none');
}
function step(idxStep1,idStep2){
    eStepper.children[idxStep1].classList.add('step-after');//after
    eStepper.children[idStep2].classList.add('active');//before
    eForm.children[idxStep1].classList.remove('d-block');
    eForm.children[idxStep1].classList.add('d-none');
    eForm.children[idStep2].classList.remove('d-none');
    eForm.children[idStep2].classList.add('d-block');
}

function isFormatEmail(email){
    const regexName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexName.test(email);
}
// (?=.*[0-9])- Khẳng định một chuỗi có ít nhất một số;
// (?=.*[!@#$%^&*])- Khẳng định một chuỗi có ít nhất một ký tự đặc biệt.
function isFormatPass(pass){
    const regexName = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regexName.test(pass);
}