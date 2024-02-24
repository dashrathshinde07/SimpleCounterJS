const countValue = document.querySelector('#counter');

const increment = () =>{

    // Get the value from UI
    let value = parseInt(countValue.innerText);

    
    value = value + 1;

    // set the value onto UI
    countValue.innerText = value;

}

const decrement = () => {

    // Get The value from UI

    let value = parseInt(countValue.innerText);

    value = value - 1;

    // set the value onto UI
    countValue.innerText = value ;
}