const button = document.querySelector('button');


async function handle() {
    const response = await fetch('http://localhost:3000');
    const resp = await response.json();
    
    console.log(resp);
    
}

button.addEventListener('click', handle);
// handle();