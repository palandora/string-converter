
var images = [];


const updateString = () =>{
    const containerRegText = document.querySelector('.original_text');
    
    document.addEventListener('keydown', e =>{
        const newString = containerRegText.textContent.replace('Whats your name darling?', '');
        containerRegText.textContent = newString;
        if(e.code == "Backspace"){
            const currentString = containerRegText.textContent;
            const newString = currentString.slice(0, currentString.length - 1);
            containerRegText.textContent = newString;
        }else if(e.key.length > 1 || e.code == "Space"){
            containerRegText.textContent += "";
        }
        else{
            containerRegText.textContent += `${e.key}`;
            updateImages("B");
        }
        
    });
}

// Konzept -> Übergabeparameter = Event Objekt
// Innerhalb der Funktion -> Switch Case: Welchem Asset entspricht e.key
// Abfrage => Bachspace Array.pop()
//Helperfunktion bauen um html Objekt zu erzeugen & zu befüllen 

const updateImages = (letter) =>{
    const image = document.createElement('img');
    image.src  = `assets/${letter}.svg`;
    image.className = 'character';
    images.push(image);
    for(let i=0; i< images.length; i++){
        document.querySelector('.translation').appendChild(images[i]);
    }
}

updateString();
