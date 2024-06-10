function changeReadMore(myboxid, mybuttonid) { 
    const testo = document.getElementById(myboxid); 
    const button = document.getElementById(mybuttonid); 
  
    if (testo.style.display === 'none' || testo.style.display === '') { 
        testo.style.display = 'inline'; 
        button.textContent = 'Leggi di meno'; 
    } else { 
        testo.style.display = 'none'; 
        button.textContent = 'Leggi di più'; 
    } 
}