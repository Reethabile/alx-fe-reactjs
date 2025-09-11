import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => deleteRecipe(recipeId)}
      style={{ marginTop: '10px', color: 'white', backgroundColor: 'red', border: 'none', padding: '5px 10px' }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
