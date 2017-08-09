var arrayImgs = document.querySelectorAll('.slider ul li');


function imgClick(i, e){
        var img = document.querySelector('.main_img');
        var newsrc = arrayImgs[i].querySelector('img').getAttribute('src');
        img.setAttribute('src', newsrc);
        for (var j = 0; j < arrayImgs.length; j++) {
            arrayImgs[j].classList = '';
        }
        arrayImgs[i].classList = 'active';
}


for(var i = 0; i < arrayImgs.length; i++) {
    arrayImgs[i].addEventListener('click', imgClick.bind(arrayImgs[i], i));
}

var imageBox = document.querySelector('.slider > ul'); 

imageBox.addEventListener('mousewheel', function(e){
    var index = this.querySelector('.active').dataset.index;
    var nextIndex = parseInt(index);
    if(nextIndex < arrayImgs.length && nextIndex > 0) {
        imgClick(nextIndex);
    } else {
        imgClick(0);
    }
}); 