const imageElement = document.querySelectorAll(".image");
const backElement = document.querySelector(".back");
const forwardElement= document.querySelector(".forward")
const imgElementId = document.querySelector('img');

var itemClassName = "image";
    totalImageCount = imageElement.length;

function toggleForward(){
    if(imageElement[0].id === 'active'){
        imageElement[0].id = 'not-active';
        imageElement[1].id = 'active';
    } else if (imageElement[1].id === 'active'){
        imageElement[1].id = 'not-active';
        imageElement[2].id = 'active';
    } else if (imageElement[2].id === 'active'){
        imageElement[2].id = 'not-active';
        imageElement[3].id = 'active';
    } else if(imageElement[3].id === 'active'){
        imageElement[3].id = 'not-active';
        imageElement[4].id = 'active';
    } else if(imageElement[4].id === 'active'){
        imageElement[4].id = 'not-active';
        imageElement[5].id = 'active';
    } else if(imageElement[5].id === 'active'){
        imageElement[5].id = 'not-active';
        imageElement[0].id = 'active';
    }
}

function toggleBack(){
    if (imageElement[5].id === 'active'){
        imageElement[5].id = 'not-active';
        imageElement[4].id = 'active';
    } else if (imageElement[4].id === 'active'){
        imageElement[4].id = 'not-active';
        imageElement[3].id = 'active';
    } else if(imageElement[3].id === 'active'){
        imageElement[3].id = 'not-active';
        imageElement[2].id = 'active';
    } else if(imageElement[2].id === 'active'){
        imageElement[2].id = 'not-active';
        imageElement[1].id = 'active';
    } else if(imageElement[1].id === 'active'){
        imageElement[1].id = 'not-active';
        imageElement[0].id = 'active';
    } else if(imageElement[0].id === 'active'){
        imageElement[0].id = 'not-active';
        imageElement[5].id = 'active';
    }
}

backElement.addEventListener('click', toggleBack);
forwardElement.addEventListener('click', toggleForward);


