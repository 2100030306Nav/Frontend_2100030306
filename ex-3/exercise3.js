function modifyParagraph(paragraph) {
   
    const words = paragraph.textContent.split(/\s+/);
  
   
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > 8) {
       
        words[i] = `<span style="background-color: yellow;">${word}</span>`;
      }
    }
  
    
    const modifiedText = words.join(' ');
  

    paragraph.innerHTML = modifiedText;
  }
  
 
  const paragraph = document.querySelector('p');
  
  modifyParagraph(paragraph);
  