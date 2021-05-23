
var images = [];
const placeholderString = "Tell us your name.";


const updateCanvas = () =>{
    const containerRegText = document.querySelector('.original_text');
    containerRegText.textContent = placeholderString;

    document.addEventListener('keydown', e =>{
        const currentStringLength = containerRegText.textContent.length;

        if(currentStringLength == 1){
            containerRegText.classList.add("teaser");
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
            if(containerRegText.classList[1] == "teaser"){
                containerRegText.classList.remove("teaser");
            }
            
            containerRegText.textContent += `${e.key}`;
            
            addImage(e);
            checkSizing();
        }
        
    });
}


const checkSizing = () =>{
    const allSVGs = document.getElementsByClassName("character");
    const containerSVGs = document.querySelector(".translation");
    const widthContainer = parseInt(window.getComputedStyle(containerSVGs).width);
    let totalWidth = 0;

    const boundsSVGs = document.querySelector(".translation");

    for(let i=0; i<allSVGs.length; i++){
        const cssValueString = window.getComputedStyle(allSVGs[i]).width;
        const cssValueInt = parseInt(cssValueString);
        totalWidth += cssValueInt;
    }

    if(totalWidth > widthContainer){
        console.log("pam");
        /*for(let i=0; i<allSVGs.length; i++){
            allSVGs[i].style.width = "40px";
        }*/
    }

}



const addImage = (keyCode) =>{
    createContainer();

    const imageDesc = keyCode.key.toUpperCase();
    const image = document.createElement('img');
    image.src  = `assets/inverted/${imageDesc}.svg`;
    image.className = 'character';
    document.querySelector('.translation').appendChild(image);
}

const removelastImage = () =>{
    const lastElement = document.querySelector(".translation").lastChild;
    document.querySelector('.translation').removeChild(lastElement);

    if(document.getElementsByClassName("character").length == 0){
        const container = document.querySelector('.translation');
        document.querySelector('body').removeChild(container);
    }
    
}


const createContainer = () => {
    if(document.querySelector('.translation') == null){
        const container = document.createElement('div');
        container.className = "translation";
        document.querySelector('body').appendChild(container);
    }else{
        return;
    }
}

updateCanvas();
