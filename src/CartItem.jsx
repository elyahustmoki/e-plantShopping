import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

/**
 * Composant Page Panier / CartItem
 * Permet de visualiser les articles ajoutés, de modifier leurs quantités,
 * de supprimer un élément et de calculer l'ensemble des frais en temps réel.
 */
function CartItem({ onContinueShopping }) {
  // Extraction de la liste des produits du panier depuis le store central Redux
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calcul du prix total de l'ensemble des plantes présentes dans le panier
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  // Calcul du sous-total financier pour un type de plante spécifique (Prix unitaire x Quantité)
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  // Augmente la quantité d'un article de 1 via dispatch de l'action centrale
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  // Diminue la quantité d'un article de 1, ou le supprime complètement s'il n'en reste qu'un seul
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  // Déclenche la suppression immédiate d'un article du panier
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  // Affiche un message d'information lors du clic sur le bouton de paiement simulé
  const handleCheckout = () => {
    alert("Fonctionnalité à venir ! Merci pour votre confiance envers Paradise Nursery.");
  };

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '30px auto', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #e0e0e0', paddingBottom: '15px', textAlign: 'center' }}>
        Votre Panier d'Achat 🛒
      </h2>
      
      {/* Affichage du montant total global proéminent */}
      <h3 style={{ textAlign: 'right', margin: '20px 0', color: '#333', fontSize: '22px' }}>
        Montant Global : <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>{calculateTotalAmount()} €</span>
      </h3>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', fontSize: '18px', margin: '40px 0' }}>Votre panier est actuellement vide.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', border: '1px solid #e0e0e0', padding: '15px', borderRadius: '8px', alignItems: 'center', gap: '20px' }}>
              {/* Vignette de la plante */}
              <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '6px' }} />
              
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#333' }}>{item.name}</h4>
                <p style={{ margin: '0 0 5px 0', color: '#666' }}>Prix unitaire : {item.cost} €</p>
                <p style={{ margin: '0', fontWeight: 'bold', color: '#2e7d32' }}>Sous-total : {calculateTotalCost(item)} €</p>
              </div>

              {/* Contrôles de quantité (+ / -) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button 
                  style={{ width: '32px', height: '32px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px' }}
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span style={{ fontSize: '18px', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button 
                  style={{ width: '32px', height: '32px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px' }}
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              {/* Bouton de suppression individuelle */}
              <button 
                style={{ padding: '8px 12px', backgroundColor: '#e53935', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                onClick={() => handleRemove(item.id)}
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Barre d'actions en bas de page */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', gap: '20px' }}>
        <button 
          style={{ padding: '12px 25px', backgroundColor: 'transparent', color: '#2e7d32', border: '2px solid #2e7d32', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
          onClick={onContinueShopping}
        >
          ← Continuer vos achats
        </button>
        <button 
          style={{ padding: '12px 35px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Passer au paiement
        </button>
      </div>
    </div>
  );
}

export default CartItem;
