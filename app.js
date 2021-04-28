const searchFoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;
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
        foodDiv.className = 'd-flex justify-content-center mx-auto mb-4 col-md-4';
        foodDiv.innerHTML = `
                <div class="card text-center" style="width: 20rem; cursor:pointer">
                    <img src="${food.strMealThumb}" class="card-img-top img-fluid" alt="..." style="transform:scale(1)">
                    <div class="card-body">
                        <h5 class="card-title">${food.strMeal}</h5>
                    </div>
                </div>      
        `;
        foodContainer.appendChild(foodDiv);
    })
}

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}