class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then((results) => {
        console.log("Results", results.data);
      })
      .catch((err) => {
        console.log("error was found", err);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + "/characters/" + id)
      .then((results) => {
        console.log("Results", results.data);
      })
      .catch((err) => {
        console.log("error was found", err);
      });
  }

  createOneRegister(newChar) {
    axios
      .post(this.BASE_URL + "/characters/", newChar)
      .then((results) => {
        console.log("This is what got created", results.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
