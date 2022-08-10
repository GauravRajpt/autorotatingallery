const mainImg= document.querySelector('img.mainImg');
const thumbnail= document.querySelectorAll('.thumbnail');
let timer;
const timeInterval= 2500;
const thumbnailArray= Array.from(thumbnail);
//click
thumbnail.forEach(img=>{
    img.addEventListener('click', ()=>{
        updateActive(img);
        clearInterval(timer);
        autorotating();
    })
})


//active
function updateActive(img){
    thumbnail.forEach(img=>{
        img.classList.remove('active');
    });
    img.classList.add('active');
    mainImg.src= img.src;
}


//autorotating
function autorotating(){
    
timer= setInterval(() => {
    const activeImg= document.querySelector('.thumbnail.active');
    let NewActive;
    thumbnail.forEach(img=>{
        if (activeImg===thumbnailArray[thumbnailArray.length-1]) {
            //console.log(thumbnailArray)
            NewActive= thumbnailArray[0];
            updateActive(NewActive);
        }
        else{
         NewActive= activeImg.nextElementSibling;
        updateActive(NewActive);}
    })
}, timeInterval);
}
autorotating();