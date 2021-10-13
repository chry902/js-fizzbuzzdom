let section = document.querySelector(".section")



for (let i = 0; i <= 100; i++) {
    console.log(i);
    const element = `<div class= "box box--${i}">${i}</div>`;
    section.insertAdjacentHTML(`beforeend`, element);

}