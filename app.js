const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
function showPage(pageId) {
    document.querySelectorAll('.main-content0, .main-content1').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'flex';
}
