import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

/**
 * Composant Catalogue / ProductList
 * Gère l'affichage des catégories de plantes, la barre de navigation supérieure,
 * l'icône de panier dynamique et l'ajout de produits.
 */
function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  
  // Sélection des articles du panier dans le store Redux
  const cartItems = useSelector(state => state.cart.items);

  // Calcul dynamique de la quantité totale d'articles pour la bulle du panier
  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Base de données locale contenant 3 catégories de 6 plantes d'intérieur uniques (18 plantes au total)
  const categoriesData = [
    {
      category: "Plantes Purifiantes",
      plants: [
        { id: 1, name: "Fleur de Lune (Spathiphyllum)", image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?w=300", cost: 15 },
        { id: 2, name: "Plante Serpent (Sansevieria)", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300", cost: 20 },
        { id: 3, name: "Pothos Doré", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=300", cost: 12 },
        { id: 4, name: "Plante Araignée (Chlorophytum)", image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=300", cost: 14 },
        { id: 5, name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547610212-0761e0e8e97a?w=300", cost: 18 },
        { id: 6, name: "Ficus Benjamina", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300", cost: 25 }
      ]
    },
    {
      category: "Plantes pour Débutants (Entretien Facile)",
      plants: [
        { id: 7, name: "ZZ Plant (Zamioculcas)", image: "https://images.unsplash.com/photo-1632205511046-24a0ff46d84f?w=300", cost: 22 },
        { id: 8, name: "Succulente Echeveria", image: "https://images.unsplash.com/photo-1520302832675-a099db7334d5?w=300", cost: 8 },
        { id: 9, name: "Cactus de Noël", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=300", cost: 16 },
        { id: 10, name: "Arbre de Jade", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300", cost: 15 },
        { id: 11, name: "Aspidistra Élevée", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=300", cost: 30 },
        { id: 12, name: "Peperomia Obtusifolia", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300", cost: 12 }
      ]
    },
    {
      category: "Plantes Aromatiques & Utiles",
      plants: [
        { id: 13, name: "Basilic Grand Vert", image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=300", cost: 5 },
        { id: 14, name: "Menthe Poivrée", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300", cost: 5 },
        { id: 15, name: "Romarin Officinal", image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=300", cost: 6 },
        { id: 16, name: "Lavande Vraie", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=300", cost: 10 },
        { id: 17, name: "Thym Commun", image: "https://images.unsplash.com/photo-1594488344131-03ec03ff0b29?w=300", cost: 6 },
        { id: 18, name: "Persil Frisé", image: "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?w=300", cost: 4 }
      ]
    }
  ];

  // Dispatch de l'action d'ajout au panier Redux
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Vérifie si un produit est déjà présent dans le panier pour désactiver son bouton
  const isItemInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7f4', minHeight: '100vh' }}>
      {/* Barre de navigation supérieure commune (Navbar) */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#2e7d32', padding: '15px 30px', color: 'white', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => window.location.reload()}>
          Paradise Nursery 🌿
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '18px', fontWeight: '500' }}>
          <span style={{ cursor: 'pointer', borderBottom: !showCart ? '2px solid white' : 'none' }} onClick={() => setShowCart(false)}>
            Boutique Plantes
          </span>
          <span style={{ cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={() => setShowCart(true)}>
            🛒 Panier 
            {totalItemsCount > 0 && (
              <span style={{ backgroundColor: '#ff9800', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '14px', fontWeight: 'bold' }}>
                {totalItemsCount}
              </span>
            )}
          </span>
        </div>
      </nav>

      {/* Rendu conditionnel : soit la page panier, soit la liste des produits */}
      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {categoriesData.map((cat, idx) => (
            <div key={idx} style={{ marginBottom: '5px' }}>
              <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px', marginTop: '30px' }}>
                {cat.category}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', marginTop: '20px' }}>
                {cat.plants.map(plant => (
                  <div key={plant.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                    <h3 style={{ fontSize: '18px', margin: '15px 0 5px 0', color: '#333', height: '44px' }}>{plant.name}</h3>
                    <p style={{ fontWeight: 'bold', color: '#2e7d32', fontSize: '16px', margin: '5px 0 15px 0' }}>{plant.cost} €</p>
                    
                    {/* Bouton d'ajout gérant le changement d'état et la désactivation */}
                    <button 
                      style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: isItemInCart(plant.id) ? '#9e9e9e' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isItemInCart(plant.id) ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s'
                      }}
                      disabled={isItemInCart(plant.id)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {isItemInCart(plant.id) ? "Déjà dans le Panier ✓" : "Ajouter au panier"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
