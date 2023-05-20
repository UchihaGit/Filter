const buttons = document.querySelectorAll("li");
const section = document.querySelectorAll(".thumb");

buttons.forEach(item => {                       //pass all values of li

  item.addEventListener('click' , () =>{        //pass the selected value

    buttons.forEach(item => {

      item.className="";                        //makes all the values inactive

    });
    item.className="active";                    //makes the selected value active

    let values = item.textContent;

    section.forEach(show => {                   //pass allthe values

      show.style.display = "none";              //makes all the values invisible

      if (show.getAttribute("data-id")===values || values === "all") {

        show.style.display = "block";           //makes the selected value visible

      }
    });

  });
});
(function() {
  const searchBox = document.querySelector("input");
  //const clan = document.querySelectorAll("h1");
  const section = document.querySelectorAll(".thumb")
  searchBox.addEventListener("keyup", (e) => {                    //triggers when a key is pressed

    const searchFilter = e.target.value.toLowerCase().trim();    //gets value from input field
    //console.log(v);
    section.forEach((item) => {
      //console.log(item.textContent);

      if (item.textContent.includes(searchFilter)) {
          //console.log(item.textContent);
        item.style.display = "block"
      }else {
        item.style.display = "none"
      }
    });

  });
})();
