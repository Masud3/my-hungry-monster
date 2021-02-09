const searchMeal = () =>{
    const searchText = document.getElementById('search-place').value;
    const url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row align-items-center text-center my-3 p-3';
        mealDiv.innerHTML = `
            <img src="${meal.strMealThumb}" class="rounded float-start" alt="...">
        `;
        mealContainer.appendChild(mealDiv);
    })
}