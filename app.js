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
        mealDiv.className = 'meal';
        const mealInfo = `
        <img src="${meal.strMealThumb}" class="img" alt="...">
        <h3 class="h3">${meal.strMeal}</h3>
        <button class="detailsBtn" onclick="aboutMealDetail('${meal.meal}')">Details</button>
        `
        mealDiv.innerHTML = mealInfo;

        mealContainer.appendChild(mealDiv);
    });
}

const aboutMealDetail = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood/meal/${meal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(meal[0]));
}

const renderMealInfo = meal => {
    const mealDiv = document.getElementById("mealDetail");
    mealDiv.innerHTML = `
    <h1>${meal.strMeal}</h1>
    `
}