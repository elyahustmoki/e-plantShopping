import { createSlice } from '@reduxjs/toolkit';

/**
 * Slice Redux pour la gestion du panier d'achat.
 * Gère l'état centralisé des articles sélectionnés, des quantités et des suppressions.
 */
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Structure d'un item : { id, name, image, cost, quantity }
  },
  reducers: {
    // Action 1 : Ajouter une plante au panier
    addItem: (state, action) => {
      const { id, name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        // Si l'article existe déjà, on incrémente sa quantité
        existingItem.quantity++;
      } else {
        // Sinon, on l'ajoute comme nouvel article avec une quantité initiale de 1
        state.items.push({ id, name, image, cost, quantity: 1 });
      }
    },
    
    // Action 2 : Supprimer complètement un article du panier via son ID
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    // Action 3 : Mettre à jour manuellement la quantité d'un article spécifique
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      
      if (itemToUpdate && quantity > 0) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exportation des actions pour pouvoir les déclencher (dispatch) depuis les composants
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exportation du reducer pour l'enregistrer dans le Store Redux de l'application
export default CartSlice.reducer;
