let recipes = [];
fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        recipes = data;
        displayRecipes(recipes);
    });

function displayRecipes(recipesList) {
    const container = document.getElementById("recipe-container");
    container.innerHTML = "";
    recipesList.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.onclick = () => showRecipeDetails(recipe.name);
        recipeCard.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.category}</p>`;
        container.appendChild(recipeCard);
    });
}

function showRecipeDetails(recipeName) {
    localStorage.setItem("selectedRecipe", recipeName);
    window.location.href = "recipe.html";
}

document.getElementById("search-bar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
    displayRecipes(filteredRecipes);
});
