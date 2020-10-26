// 26-10-20
{
    // схований елемент
    const levusPopUp = document.getElementById('levus-popup');

    setTimeout(()=>{
        levusPopUp.className = 'show';
    },1000);

    levusPopUp.addEventListener('click', () => {
        levusPopUp.className = '';
    });
}