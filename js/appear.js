let range = document.querySelector('.example__range');
let photo = document.querySelector('.example__photo-item--before');


range.addEventListener('input',function(){
 photo.style.opacity = this.value + "%";
});