export class Api {
  constructor(card) {
    this.card = card;

    Promise.resolve(
      this.card.searchBar.addEventListener(
        "keyup",
        this.debounce(this.searchUsers.bind(this), 400)
      )
    ).then();
  }
  async searchUsers() {
    const searchValue = this.card.searchBar.value;
    if (searchValue.length) {
      return await fetch(
        `https://api.github.com/search/repositories?q=${searchValue}`
      )
        .then((res) => {
          if (res.ok) {
            this.clearUsers();
            return res.json();
          }
        })
        .then((res) => {
          console.log(res);
          let dataArr = res.items.slice(0, 5);

          dataArr.forEach((user) => this.card.createUser(user));
        });
    } else {
      this.clearUsers();
    }
  }
  clearUsers() {
    this.card.droplist.innerHTML = "";
  }

  debounce(fn, ms) {
    let debounce;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        fn.apply(context, args);
      }, ms);
    };
  }
}
