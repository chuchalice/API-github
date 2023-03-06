export class Card {
  constructor() {
    this.droplist = document.querySelector(".droplist");
    this.searchBar = document.querySelector(".search-bar");
    this.usersMenu = document.querySelector(".users");
  }
  createElement(elementTag, elementClass) {
    const element = document.createElement(elementTag);
    if (elementClass) {
      element.classList.add(elementClass);
    }
    return element;
  }
  createUser(userData) {
    const dropList = this.droplist;
    const usersMenu = this.usersMenu;
    const userList = this.createElement("li", "droplist__el");
    const wrappDiv = this.createElement("div", "text-wrap");
    userList.append(wrappDiv);
    const repName = this.createElement("p", "droplist__name");
    repName.textContent = `Name: ${userData.name}`;
    const ownerName = this.createElement("p", "droplist__owner");
    ownerName.textContent = `Owner: ${userData.owner.login}`;
    const starsCount = this.createElement("p", "droplist__stars");
    starsCount.textContent = `Stars: ${userData.id}`;
    wrappDiv.append(repName);
    wrappDiv.append(ownerName);
    wrappDiv.append(starsCount);
    const closeBtn = this.createElement("button", "close-btn");
    closeBtn.textContent = "X";

    dropList.addEventListener("click", function (e) {
      const target = e.target.closest("li");
      if (!target) return;
      if (!dropList.contains(target)) return;
      usersMenu.append(target);
      dropList.innerHTML = "";
    });

    userList.append(wrappDiv);
    userList.append(closeBtn);
    this.droplist.append(userList);
  }
}
