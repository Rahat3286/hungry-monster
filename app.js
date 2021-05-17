const searchFoods = () => {
    const searchText = document.getElementById('search-field').value.trim();
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;
    displayfoods(false);
    toggleSpinner(true);
    toggleSpinner(true);
    fetch(url)
        .then(res => res.json())
        .then(data => displayfoods(data.meals))
        .catch(error => displayError("Your Search Result didn't match !!!"));
}

const displayfoods = foods => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    if(foods){
        foods.forEach(food => {
            const foodDiv = document.createElement('div');
            foodDiv.className = 'd-flex justify-content-center mb-4 col-lg-3';
            foodDiv.innerHTML = `
                    <div class="card text-center food-cards">
                        <img src="${food.strMealThumb}" class="card-img-top img-fluid" alt="Food Image">
                        <div class="card-body">
                            <p class="card-title text-center">${food.strMeal}</p>
                        </div>
                    </div>      
            `;
            foodContainer.appendChild(foodDiv);
        })
    }else{
        displayError(false);
    }
    toggleSpinner(false);
}

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
    if (error) {
        errorTag.classList.remove('d-none');
    }
    else {
        errorTag.classList.add('d-none');
    }
    toggleSpinner(false);
}

const toggleSpinner = (show) => {
    const spinner = document.getElementById('loading-spinner');
    if (show) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
}

const input = document.getElementById("search-field");
input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchFoodButton").click();
    }
});