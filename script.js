
var images = [];


const updateContents = () =>{
    const containerRegText = document.querySelector('.original_text');
    
    document.addEventListener('keydown', e =>{
        const newString = containerRegText.textContent.replace('Whats your name darling?', '');
        containerRegText.textContent = newString;
        if(e.code == "Backspace"){
            const currentString = containerRegText.textContent;
            const newString = currentString.slice(0, currentString.length - 1);
            containerRegText.textContent = newString;
        }else if(e.code == "Space" || e.code == "Tab" ||
        e.code == "CapsLock" || e.code == "ShiftLeft" ||
        e.code == "ControlLeft" || e.code == "AltLeft" ||
        e.code == "MetaLeft" || e.code == "MetaRight" ||
        e.code == "AltRight" || e.code == "ArrowUp" || 
        e.code == "ArrowRight" || e.code == "ArrowLeft" || 
        e.code == "ArrowDown" || e.code == "ShiftRight" ||
        e.code == "Enter"){
            containerRegText.textContent += "";
        }
        else{
            containerRegText.textContent += `${e.key}`;
            addCharactertoArray("B");
        }
        
        console.log(e.key);
    });
}


const addCharactertoArray = (letter) =>{
    const image = document.createElement('img');
    image.src  = `assets/${letter}.svg`;
    image.className = 'character';
    images.push(image);
    for(let i=0; i< images.length; i++){
        document.querySelector('.translation').appendChild(images[i]);
    }
}

updateContents();
