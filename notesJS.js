// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// Objet db pour stocker la BDD ouverte
let db;

window.onload = function() {
    // Ouvrir la BDD; elle sera créée si elle n'existe pas déjà
    // (voir onupgradeneeded)
    let request = window.indexedDB.open('notes', 1);
};