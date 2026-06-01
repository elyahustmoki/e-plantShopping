# e-plantShopping
Paradise Nursery Shopping Application

# Paradise Nursery - E-PlantShopping Application

## Description du Projet
Paradise Nursery est une application web de commerce électronique (Front-End) développée avec **React** et gérée au niveau de l'état global par **Redux Toolkit**. 
L'application permet aux utilisateurs de parcourir un catalogue de plantes d'intérieur, de les ajouter à un panier virtuel, d'ajuster les quantités et de voir le coût total en temps réel avant simulation d'un paiement.

## Architecture des Fichiers
- `/README.md` : Documentation du projet (Racine)
- `/src/App.jsx` : Composant principal et gestion de la page d'accueil
- `/src/App.css` : Styles généraux et image de fond de l'accueil
- `/src/AboutUs.jsx` : Section de présentation de l'entreprise
- `/src/ProductList.jsx` : Catalogue des produits répartis en catégories
- `/src/CartSlice.jsx` : Slice Redux pour la gestion de l'état du panier
- `/src/CartItem.jsx` : Page de visualisation et gestion du panier d'achat

## Fonctionnalités Clés
- Navigation fluide entre l'Accueil, la Boutique et le Panier.
- Compteur dynamique d'articles dans la barre de navigation.
- Calcul automatique des sous-totaux par produit et du montant total global.
