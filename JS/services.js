function toggleNavbar() {
  const navbar = document.querySelector('.navbar-container');
  navbar.style.display = navbar.style.display === 'none' ? 'block' : 'none';
}
function calculateCalorieIndex() {
  if (window.innerWidth < 768) {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  }
  //взимаме стойностите от полетата
  let result = document.getElementById("result");
  let sex = Number(document.getElementById("sex").value);
  let age = Number(document.getElementById("age").value);
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let activity = Number(document.getElementById("activity").value);

  let calorie = 0;
  if (sex === 1) {
    // мъже
    calorie = 10 * weight + 6.25 * height - 5 * age + 5;
    if (activity === 1) {
      calorie *= 1.2;
    } else if (activity === 2) {
      calorie *= 1.375;
    } else if (activity === 3) {
      calorie *= 1.55;
    } else if (activity === 4) {
      calorie *= 1.725;
    } else if (activity === 5) {
      calorie *= 1.9;
    } else {
      return (result.innerHTML = "Моля изберете ниво на активност!");
    }
  } else if (sex === 2) {
    // жени
    if (activity === 1) {
      calorie *= 1.2;
    } else if (activity === 2) {
      calorie *= 1.375;
    } else if (activity === 3) {
      calorie *= 1.55;
    } else if (activity === 4) {
      calorie *= 1.725;
    } else if (activity === 5) {
      calorie *= 1.9;
    } else {
      return (result.innerHTML = "Моля изберете ниво на активност!");
    }
  } else {
    return (result.innerHTML = "Моля изберете пол!");
  }
  calorie = 10 * weight + 6.25 * height - 5 * age - 161;
  //BMI
  let bmi = weight / Math.pow(height / 100, 2);
  result.innerHTML =
    "Калории: " +
    calorie.toFixed(2) +
    " kcal" +
    "<br>" +
    "Индекс на телесна маса: " +
    bmi.toFixed(2);
  if (bmi < 18.5) {
    result.innerHTML += " <br>(<i>Недостатъчно тегло</i>)";
  } else if (bmi >= 18.5 && bmi < 25) {
    result.innerHTML += " <br>(<i>Нормално тегло</i>)";
  } else if (bmi >= 25 && bmi < 30) {
    result.innerHTML += " <br>(<i>Наднормено тегло</i>)";
  } else {
    result.innerHTML += "<br>(<i>Затлъстяване</i>)";
  }
}
