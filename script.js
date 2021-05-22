
var images = [];
const placeholderString = "Tell us your name.";


const updateCanvas = () =>{
    const containerRegText = document.querySelector('.original_text');
    containerRegText.textContent = placeholderString;

    document.addEventListener('keydown', e =>{
        const currentStringLength = containerRegText.textContent.length;

        if(currentStringLength == 1){
            const newString = containerRegText.textContent.replace("", placeholderString);
            containerRegText.textContent = newString;
        }
        if(e.code == "Backspace"){
            if(containerRegText.textContent == placeholderString) return;
            const currentString = containerRegText.textContent;
            const newString = currentString.slice(0, currentString.length - 1);
            containerRegText.textContent = newString;
            removelastImage();
        }else if(e.key.length > 1 || e.code == "Space"){
            containerRegText.textContent += "";
        }
        else{
            const newString = containerRegText.textContent.replace(placeholderString, "");
            containerRegText.textContent = newString;
            
            containerRegText.textContent += `${e.key}`;
            
            addImage(e);
            checkSizing();
        }
        
    });
}


const checkSizing = () =>{
    const allSVGs = document.getElementsByClassName("character");
    const totalWidth = 0;
    for(let i=0; i<allSVGs.length; i++){
        allSVGs[i].style.width = "300px";
    }
    
}



const addImage = (keyCode) =>{
    const imageDesc = keyCode.key.toUpperCase();
    const image = document.createElement('img');
    image.src  = `assets/${imageDesc}.svg`;
    image.className = 'character';
    images.push(image);
    for(let i=0; i< images.length; i++){
        document.querySelector('.translation').appendChild(images[i]);
    }
}

const removelastImage = () =>{
    if(images.length > 0){
        const lastItem = images.pop();
        document.querySelector('.translation').removeChild(lastItem);
    }else{
        return;
    }
}

updateCanvas();
