import React from 'react';

/**
 * Composant AboutUs
 * Présente l'histoire, la mission et les valeurs de Paradise Nursery.
 * Intégré directement sur la page d'accueil de l'application.
 */
function AboutUs() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', color: '#333' }}>
      <h2 style={{ color: '#2e7d32', marginBottom: '15px' }}>À propos de Paradise Nursery</h2>
      
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>
        Bienvenue chez <strong>Paradise Nursery</strong>, où la nature s'invite dans votre quotidien. 
        Notre mission est de propager l'amour des plantes en proposant une sélection rigoureuse de plantes d'intérieur de haute qualité. 
        Chaque plante est cultivée avec soin pour garantir sa robustesse et sa beauté.
      </p>
      
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        Que vous cherchiez à purifier l'air de votre bureau, à ajouter une touche de verdure à votre salon ou à offrir un cadeau durable, 
        notre équipe d'experts est là pour vous conseiller. Rejoignez notre communauté verdoyante dès aujourd'hui et transformez votre espace en un havre de paix.
      </p>
    </div>
  );
}

export default AboutUs;
