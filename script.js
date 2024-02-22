const btn = document.querySelector(".button");
const input = document.querySelector(".input");


async function wikipedia() {
    console.log("Entry");
    const response = await fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=');
    console.log(response);
    
        if(response.ok){
            const data = await response.json();
            //let title;
            //let snippet;
    
           // input.textContent = data.title;
           // input.textContent = data.snippet;
    
    
        }
    console.log("Exit");
    
    }


btn.addEventListener('click',wikipedia);