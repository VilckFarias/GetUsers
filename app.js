const button = document.querySelector('button');
const list = document.querySelector('ul')


async function handle() {
    try {
        const response = await fetch('http://localhost:3000');
        const resp = await response.json();
    
        list.textContent = '';
        
        for (let i = 0; i < resp.length; i++) {
            const item = document.createElement('li')
            item.textContent = resp[i].name + ' | ' + resp[i].email;
            list.appendChild(item)
        };
    } catch (error) {

    }
}

button.addEventListener('click', handle);
// handle();