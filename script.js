const items = document.querySelectorAll(".item");

      items.forEach((item) => {
        const x = item.querySelector(".title");
        const y = item.querySelector(".content");

        x.addEventListener("click", () => {
          item.classList.toggle("active");
        });
      });


// document.title = "My Website";
document.addEventListener("visibilitychange", function() 
{
if (document.hidden)
{
    document.title = "Hey, come back! : (";
}
else
{
    document.title = "CodeNinja ❤️";
}
});
// script.js

function expandCard(card) {
  // Toggle the expanded class to show/hide the expanded card
  card.classList.toggle('expanded');
  
  // Optionally, collapse other cards
  const allCards = document.querySelectorAll('.dsaProfile');
  allCards.forEach(function(otherCard) {
    if (otherCard !== card) {
      otherCard.classList.remove('expanded');
    }
  });
}