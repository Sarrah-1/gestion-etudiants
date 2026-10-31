# Gestion des étudiants avec React

> **Réalisé par :** OUADAY Sara

## Description

Application web React permettant de gérer une liste d'étudiants : afficher, ajouter, rechercher, supprimer, et calculer des statistiques. Les données sont gérées localement, sans backend ni base de données.

## Structure du projet

```
src/
├── App.jsx
├── App.css
├── main.jsx
├── StudentList.jsx
├── StudentForm.jsx
└── StudentStats.jsx
```

## Exercice 1 : Affichage des étudiants

Les étudiants sont stockés avec `useState` et affichés dans un tableau avec `students.map()`. Chaque ligne a une `key` unique (l'`id`).

<img width="539" height="413" alt="image" src="https://github.com/user-attachments/assets/35465e76-80c5-4918-8ba4-912dcbbe2171" />


## Exercice 2 : Ajout d'un étudiant

`StudentForm` utilise un état par champ (`value` et `onChange`) et `e.preventDefault()` pour ne pas recharger la page. Le nom et le prénom sont obligatoires, et la note doit être comprise entre 0 et 20. Après l'ajout, les champs sont réinitialisés.

<img width="524" height="415" alt="image" src="https://github.com/user-attachments/assets/db10bd07-1351-4b0f-9028-7fae1ed1e594" />


### Validation du formulaire
<img width="522" height="435" alt="image" src="https://github.com/user-attachments/assets/0167f99f-712c-4c3f-a9e1-e22ab2230aed" />

## Exercice 3 : Recherche et suppression

La recherche filtre les étudiants par nom, sans tenir compte des majuscules et minuscules (`toLowerCase()` des deux côtés). Le bouton **Supprimer** retire l'étudiant avec `filter()`, en utilisant son `id`.

<img width="555" height="154" alt="image" src="https://github.com/user-attachments/assets/8cca3a2c-0bee-496b-ab04-2eda076855fc" />

<img width="518" height="103" alt="image" src="https://github.com/user-attachments/assets/bf89be2d-4640-460c-a68d-a8cd5728959b" />

## Exercice 4 : Statistiques

`StudentStats` affiche le nombre d'étudiants et la moyenne générale, calculée avec `reduce()`. Si la liste est vide, il affiche « Aucun étudiant » avant de calculer, pour éviter une division par zéro.

<img width="538" height="101" alt="image" src="https://github.com/user-attachments/assets/4817a906-f668-4c0c-8e77-b3c69381fa83" />

## Résultat final
<img width="469" height="398" alt="image" src="https://github.com/user-attachments/assets/58f5ef20-ee8f-47c5-92da-b884529a2ea5" />


## Ce que j'ai appris

- Stocker des données avec `useState` et les afficher avec `map()`.
- Créer un formulaire contrôlé et valider les champs.
- Filtrer et supprimer sans modifier directement l'état d'origine.
- Remonter l'état dans le composant parent pour le partager entre plusieurs composants.
- Gérer le cas d'une liste vide pour éviter une erreur de calcul.
