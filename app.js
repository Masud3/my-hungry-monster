/************  Data load of meal *********** */
const searchMeal = () =>{
    const searchText = document.getElementById('search-place').value;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const mealContainer = document.getElementById('meal-container');
const displayMeals = meals => {
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <img src="${meal.strMealThumb}" class="img" alt="...">
        <h3 class="h3">${meal.strMeal}</h3>
        <button class="detailsBtn" onclick="aboutMealDetail('${meal.strMeal}')">Details</button>
        `
        mealDiv.innerHTML = mealInfo;

        mealContainer.appendChild(mealDiv);
    });
}

    /********** meal details information starts   ************ */


const aboutMealDetail = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));
}


const renderMealInfo = meal => {
    const mealDiv = document.getElementById("mealDetail");
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}"/>
    <h1 class="detail-name">Name: ${meal.strMeal}</h1>
    <h5>Area: ${meal.strArea}</h5>
    <p>${meal.strCategory}</p>
    <p><small>${meal.strIngredient4}</small></p>
    <p><small>${meal.strIngredient5}</small></p>
    <p><small>${meal.strIngredient6}</small></p>
    <p><small>${meal.strIngredient7}</small></p>
    <p><small>${meal.strIngredient8}</small></p>
    `
}