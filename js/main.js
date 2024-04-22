import { usersImg } from "./usersImg.js";
const API = "https://jsonplaceholder.typicode.com/users";

async function getApi(api) {
    let data = await fetch(api);
    data.json()
        .then((res) => mapUsers(res))
        .catch((err) => console.log(err));
}
getApi(API);

const usersCards = document.querySelector(".users__cards");

function mapUsers(usersData) {
    let users = "";
    usersData.forEach((user) => {
        users += `
            <div class="users__card">
                <div class="users__card__img">
                    <img src="${usersImg[user.id - 1]}" alt="" />
                </div>
                <div class="users__card__info">
                    <h3 class="users__card__name">${user.name}</h3>
                    <h3 class="users__card__username">${user.username}</h3>
                    <a target="_blank" href="email:${user.email}">Email: ${
            user.email
        }</a>
                    <p class="users__card__address">Address: ${
                        user.address.street +
                        " " +
                        user.address.suite +
                        " " +
                        user.address.city
                    }</p>
                    <a href="tel:${user.phone}">Phone: ${user.phone}</a>
                    <a target="_blank" href="${user.website}">Website: ${
            user.website
        }</a>
                    <p class="users__card__company">Company: ${
                        user.company.name
                    }</p>
                </div>
            </div>
        `;
    });
    usersCards.innerHTML = users;
}
