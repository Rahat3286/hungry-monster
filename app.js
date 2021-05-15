const searchFoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;
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
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'd-flex justify-content-center mb-4 col-md-4';
        foodDiv.innerHTML = `
                <div class="card text-center" style="width: 25rem; cursor:pointer">
                    <div style="overflow:hidden; transition: all 1.5s ease">
                        <img src="${food.strMealThumb}" class="card-img-top img-fluid" alt="..." style="transform:scale(1)">
                    </div>
                    <div class="card-body">
                        <p class="card-title align-items-center" style="font-weight: bold">${food.strMeal}</p>
                    </div>
                </div>      
        `;
        foodContainer.appendChild(foodDiv);
        toggleSpinner(false);
        displayError(false);
    })
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

document.getElementById("search-field")
    .addEventListener("keypress",function(event){
        if(event.key === 'Enter'){
            document.getElementById("searchFood").click();
        }
    
});