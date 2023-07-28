{
  /* <div class="monster">
                <img src="https://robohash.org/6?set=set2" alt="MD. Sakib Khan" />
                <p class="name">MD. Sakib Khan</p>
                <p class="email">programmingwithsakib@gmail.com</p>
            </div>

            <div class="p-5 not-found" style="display: none">
                <span>404</span>
                <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
            </div> */
}
//////create this element with DOM

import { monsters } from "./monsters.js";

// console.log(monsters)

for (let mons of monsters) {
  showMonster(mons);
}

function showMonster(mons) {
  const monster = document.createElement("div");
  monster.className = "monster";

  const img = document.createElement("img");
  img.src = `https://robohash.org/${mons.id}?set=set2`;
  img.alt = mons.name;

  const mname = document.createElement("p");
  mname.className = "name";
  mname.innerText = mons.name;

  const email = document.createElement("p");
  email.className = "email";
  email.innerText = mons.email;

  monster.append(img, mname, email);

  document.querySelector(".monsters").append(monster);

  // console.log(monster)
}

notFound();
function notFound() {
  const notFound = document.createElement("div");
  notFound.className = "p-5 not-found";
  notFound.style.display = "none";

  const span = document.createElement("span");
  span.innerText = "404";

  const h1 = document.createElement("h1");
  h1.innerText = "!--NO MONSTER FOUND--!";

  notFound.append(span, h1);

  document.querySelector(".monsters").append(notFound);

  console.log(notFound);
}

document
  .querySelector("#search-monster")
  .addEventListener("keyup", function (event) {
    const keyword = event.target.value.toLowerCase();
    console.log(event);
    console.log(keyword);

    const findmonster = document.querySelectorAll(".monster");

    let notFound = true;

    for (let monster of findmonster) {
      //console.log(monster.children)

      const name = monster.children[1].innerText.toLowerCase();

      const email = monster.children[2].innerText.toLowerCase();

      //console.log(name,email)

      if (name.includes(keyword) || email.includes(keyword)) {
        //console.log('done')
        monster.style.display = "block";
        notFound = false;
      } else {
        monster.style.display = "none";
      }
    }
    if (notFound) {
      document.querySelector(".not-found").style.display = "block";
    } else {
      document.querySelector(".not-found").style.display = "none";
    }
  });
