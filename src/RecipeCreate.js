import React, { useState } from "react";
//import RecipeData  from "./RecipeData.js";

function RecipeCreate({ recipes, setRecipes }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  function SubmitHandler(event) {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({ ...initialFormState });
  }

  function changeHandler({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  return (
    <form id="create" name="create" onSubmit={SubmitHandler}>
      <table>
        <tbody>
          <tr>
            <td id="nth">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required={true}
                value={formData.name}
                onChange={changeHandler}
              />
            </td>
            <td id="nth">
              <input
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                required={true}
                value={formData.cuisine}
                onChange={changeHandler}
              />
            </td>
            <td id="nth">
              <input
                type="url"
                name="photo"
                placeholder="URL"
                required={true}
                value={formData.photo}
                onChange={changeHandler}
              />
            </td>
            <td id="nth">
              <textarea
                name="ingredients"
                rows="2"
                cols="30"
                placeholder="Ingredients"
                required={true}
                value={formData.ingredients}
                onChange={changeHandler}
              />
            </td>
            <td id="nth">
              <textarea
                name="preparation"
                rows="2"
                cols="30"
                placeholder="Preparation"
                required={true}
                value={formData.preparation}
                onChange={changeHandler}
              />
            </td>
            <td id="nth">
              <>
                <button type="submit">Create</button>
              </>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
