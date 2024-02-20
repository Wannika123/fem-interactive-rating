console.log('Hello!')

let selectedChoice

const radios = document.querySelectorAll('input[type="radio"]');

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', () => {
        selectedChoice = radios[i].value;
    })
}

const card = document.getElementsByClassName('card')[0];
const submitBtn = document.getElementById('submit-btn');

function handleSubmit() {
    if (!selectedChoice) {
        alert("Please give the rating.")
    } else {
        card.innerHTML = `
            <div class="img-div">
                <img src="./images/illustration-thank-you.svg" alt="">
            </div>
            <div class="result-container">
                <div class="result">You selected ${selectedChoice} out of 5</div>
            </div>       
            <div class="text">
                <span class="thank-you-text">Thank you!</span>
                <p>
                  We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
                </p>
            </div>
        `
    }
}

submitBtn.addEventListener('click', handleSubmit);