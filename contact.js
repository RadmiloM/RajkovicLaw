console.log('connected to the app js file')
const back = document.querySelector('.go-back');
console.log(back);
back.addEventListener('click', () => {
    history.back();
})