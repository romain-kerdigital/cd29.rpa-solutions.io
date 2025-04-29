---
id: general
title: Mémo JavaScript - Général
sidebar_position: 1
---

# Mémo JavaScript - Général

Ce document contient des informations générales sur JavaScript utilisées dans les projets.

## Syntaxe de base

```javascript
// Variables
let variable = "valeur";
const constante = 42;

// Fonctions
function maFonction(param) {
  return param + 1;
}

// Arrow functions
const arrowFn = (param) => param + 1;

// Objets
const obj = {
  propriete: "valeur",
  methode: function() {
    return this.propriete;
  }
};
```

## Asynchronicité

```javascript
// Promesses
const promesse = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Succès");
  } else {
    reject("Erreur");
  }
});

// Async/await
async function fonctionAsync() {
  try {
    const resultat = await promesse;
    return resultat;
  } catch (erreur) {
    console.error(erreur);
  }
}
``` 