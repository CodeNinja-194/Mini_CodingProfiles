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