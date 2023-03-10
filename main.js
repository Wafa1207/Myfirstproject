var container =$("#a beautiful logo").text();
console.log(typeof container);
setInterval(()=>{
  test +="i";
  $("#a beautiful logo").text(container);
},2000);

// Récupérez tous les boutons de catégorie
var categoryButtons = document.querySelectorAll('.category-button');

// Ajoutez un écouteur d'événement à chaque bouton
categoryButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Supprimez la classe active de tous les boutons
    categoryButtons.forEach(function(button) {
      button.classList.remove('active');
    });
    
    // Ajoutez la classe active au bouton sélectionné
    button.classList.add('active');
  });
});