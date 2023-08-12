const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent=document.querySelector('.meal-details-content');
const recipeCloseBtn =document.getElementById('recipe-close-btn');
// searchBtn.addEventListener('click',getMealList);

let meal = document.getElementById("meal");
   function display(data){
    console.log(data);
    let meal = document.getElementById("meal");
    meal.innerHTML= " ";
    data.map((e)=>{
let temp = ` <div class="meal-item" > <div class="meal-img">
<img src="${e.strMealThumb}" alt="food">
</div>
<div class="meal-name">
<h3>${e.strMeal}</h3>
<a href="#" class="recipe-btn" onclick="Getrecipy(${e.idMeal})" id="recipe" >Get Recipe </a>
</div>
</div>`;

let box = document.createElement("div");
box.setAttribute("class","box");
box.innerHTML =temp;

let div  = document.createElement("div");
div.appendChild(box);
div.setAttribute("class", "box")
meal.append(box);
})
    



}
// let recipe = document.getElementById("recipe");
// recipe.addEventListener("click", function (e){
//     let div  = document.createElement("div");
//     div.setAttribute("class", "boxMain")
//     let h1 = document.createElement("h1");
//     h1.innerText = `${e.strInstructions}`;
//     div.append(h1);
//     let meal = document.getElementById("meal");
//     meal.append(div);
// })
// })

// rendom work

async function pro()
{
    // https://www.themealdb.com/api/json/v1/1/random.php
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.meals);
    display(data.meals);
}
pro();
// onclick btn work
async function Search()
{
    let inp=document.getElementById('search-inj').value
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.meals);
    display(data.meals);
}
async function Getrecipy(Id)
{
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.meals);
    dia(data.meals);
}
function dia(data)
{
    let meal = document.getElementById("meal");
    meal.innerHTML="";
    data.map((e)=>{
    let temp = ` <div class="m-item" > 
    <div class="side">
    <div class="m-img">
    <img src="${e.strMealThumb}" alt="food">
    </div>
    <div>
    <p ><b>weight</>-${e.strInstructions }</p>
    <p >weight-${e.strMeasure2}</p>
    </div>
  </div>
    <div class="m-name">
    <h3>${e.strMeal}</h3>
    <a href="#" class="recipe-btn" onclick="Getrecipy(${e.idMeal})" id="recipe" >Get Recipe </a>
    </div>
    </div>`;

    let box = document.createElement("div");
    box.setAttribute("class","box");
    box.innerHTML =temp;
    meal.append(box);
    // meal.style.width = "100%";
    });
}







