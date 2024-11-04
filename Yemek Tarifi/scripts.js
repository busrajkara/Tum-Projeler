// Tarifleri yüklemek ve sayfada göstermek için
document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.name;

        const ingredients = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredients.appendChild(li);
        });

        const instructions = document.createElement('p');
        instructions.textContent = recipe.instructions;

        recipeDiv.appendChild(recipeTitle);
        recipeDiv.appendChild(ingredients);
        recipeDiv.appendChild(instructions);
        recipeList.appendChild(recipeDiv);
    });
});
