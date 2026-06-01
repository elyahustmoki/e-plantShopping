import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

/**
 * Composant Principal App
 * Gère l'état d'affichage pour basculer de la page d'accueil au catalogue produit.
 */
function App() {
  // État local déterminant si l'utilisateur a cliqué sur "Commencer"
  const [showProductList, setShowProductList] = useState(false);

  // Fonction de gestion du clic pour ouvrir la boutique
  const handleStartClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        /* Écran d'accueil (Landing Page) */
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Votre havre de paix vert, purifié et inspirant</p>
          
          {/* Inclusion de la section de présentation (Task 2) */}
          <AboutUs />
          
          {/* Bouton pour déclencher l'affichage des produits */}
          <button className="get-started-btn" onClick={handleStartClick}>
            Commencer
          </button>
        </div>
      ) : (
        /* Affichage du catalogue d'achat dès le clic */
        <ProductList />
      )}
    </div>
  );
}

export default App;
