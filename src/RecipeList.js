import React from "react";
function RecipeList({ recipes, setRecipes }) {
  function HandleDelete(indexMatch) {
    const filteredRecipes = recipes.filter(
      (result, index) => index !== indexMatch
    );
    setRecipes(filteredRecipes);
  }

  const newRecipes = recipes.map((recipe, index) => {
    return (
      <tr className="nthOdd" key={index}>
        <th id="nth">
          <div name="name">{recipe.name}</div>
        </th>
        <th id="nth">
          <div name="cuisine">{recipe.cuisine}</div>
        </th>
        <th id="nth">
          <img
            name="photo"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            src={recipe.photo}
            alt="Meal"
          />
        </th>
        <th id="nth">
          <div className="content_td" name="ingredients">
            <p>{recipe.ingredients}</p>
          </div>
        </th>
        <th id="nth">
          <div className="content_td" name="preparation">
            <p>{recipe.preparation}</p>
          </div>
        </th>
        <td id="nth">
          <button name="delete" onClick={() => HandleDelete(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th id="nth">Name</th>

            <th id="nth">Cuisine</th>

            <th id="nth">Photo</th>

            <th id="nth">Ingredients</th>

            <th id="nth">Preparation</th>

            <th id="nth">Actions</th>
          </tr>
        </thead>
        <tbody>{newRecipes}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
