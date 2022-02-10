const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI.getOneRegister(
        document.getElementById("character-id").value
      );
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI.deleteOneRegister(
        document.getElementById("delete-element-id").value
      );
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let theform = document
        .getElementById("edit-character-form")
        .getElementsByTagName("input");

      let formarray = Array.prototype.slice.call(theform);
      let newchar = {};
      formarray.forEach((input, index) => {
        newchar[input.name === "chr-id" ? "id" : input.name] =
          index !== 4 ? input.value : input.checked;
      });
      charactersAPI.updateOneRegister(newchar);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      charactersAPI.createOneRegister({
        name: document.getElementById("newName").value,
        occupation: document.getElementById("newOccupation").value,
        weapon: document.getElementById("newWeapon").value,
        cartoon: document.getElementById("newCartoon").value === "on",
      });
    });
});
