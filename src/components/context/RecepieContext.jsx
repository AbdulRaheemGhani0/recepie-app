import { createContext, useState, useEffect } from "react";
import {
  collection,
  setDoc,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase/Firebase";

// Create the RecipeContext
export const RecipeContext = createContext();

 function  RecipeContextProvider ({ children })  {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const collectionRef = collection(db, "recepie");

  // Fetching recipes from Firestore
  useEffect(() => {
    setLoading(true);

    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setRecipes(items);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  // Adding a recipe to Firestore
  const addRecipe = async (recipe) => {
    try {
      const newRecipeRef = doc(collectionRef);
      await setDoc(newRecipeRef, {
        ...recipe,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  // Deleting a recipe from Firestore
  const deleteRecipe = async (recipeId) => {
    try {
      const recipeRef = doc(collectionRef, recipeId);
      await deleteDoc(recipeRef);
      console.log("Recipe deleted successfully");
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, loading, addRecipe, deleteRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
  


export default RecipeContextProvider ;