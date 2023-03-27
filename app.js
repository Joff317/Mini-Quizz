const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");

form.addEventListener("submit", handleform);

function handleform(e) {
  e.preventDefault();

  const result = [];

  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value == responses[index]) {
      return result.push(true);
    } else {
      return result.push(false);
    }
  });

  // console.log(result);
  showResult(result);
  addColor(result);
}

const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

const showResult = (result) => {
  const errorNumber = result.filter((el) => el === false).length;

  switch (errorNumber) {
    case 0:
      titleResult.textContent = "✔️ Bravo, c'est un sans faute ! ✔️";
      helpResult.textContent = "Quelle culture";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>5 / 5</span>";
      markResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = "✨ À ça de la perfection ! ✨";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>4 / 5</span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      break;
    case 2:
      titleResult.textContent = "👀 C'est correct.. 👀";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>3 / 5</span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      break;
    case 3:
      titleResult.textContent = "😭 C'est très bof 😭";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>2 / 5</span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      break;
    case 4:
      titleResult.textContent = "👎 C'est NUUUULL ! 👎";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>1 / 5</span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      break;
    case 5:
      titleResult.textContent = "👎 RETOURNE À L'ÉCOLE !! 👎";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>0 / 5</span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      break;
    default:
      titleResult.textContent = "WOPS quelque chose s'est mal passé";
  }
};

const questions = document.querySelectorAll(".question-block");
console.log(questions);

const addColor = (result) => {
  for (let i = 0; i < result.length; i++) {
    if (result[i]) {
      questions[i].style.background =
        "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      questions[i].style.background =
        "linear-gradient(to right, #f5567b, #fd674c)";
    }
  }
};

const radioInputs = document.querySelectorAll("input[type='radio']");

radioInputs.forEach((radioInput) =>
  radioInput.addEventListener("input", resetColor)
);

function resetColor(e) {
  const index = e.target.getAttribute("name").slice(1) - 1;
  console.log(index);
  const parentQuestionBlock = questions[index];
  console.log(parentQuestionBlock);

  parentQuestionBlock.style.backgroundColor = "#f1f1f1";
}
