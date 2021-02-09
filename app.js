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
        `
        mealDiv.innerHTML = mealInfo;

        mealContainer.appendChild(mealDiv);
    });
}








// const displayMeals = meals => {
//     const mealContainer = document.getElementById('meal-container');
//     meals.forEach(meal => {
//         const mealDiv = document.createElement('div');
//         mealDiv.className = 'meal';
//         mealDiv.className = 'single-result row align-items-center text-center my-3 p-3';
//         mealDiv.innerHTML = `
//             <img src="${meal.strMealThumb}" class="rounded float-start" alt="...">
//             <h3>${meal.strMeal}</h3>
//         `;
//         mealContainer.appendChild(mealDiv);
//     })
// }