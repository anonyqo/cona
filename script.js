const meals = {
	breakfast: [
		{
			name: "Jajecznica",
			price: 8,
			ingredients: ["jajka", "masło", "szczypiorek"],
			recipe: "Rozbij jajka, usmaż na patelni z masłem, posyp szczypiorkiem.",
			nutritionalInfo: { calories: 200, protein: 15, fat: 15, carbs: 1 },
		},
		{
			name: "Owsianka",
			price: 5,
			ingredients: ["płatki owsiane", "mleko", "banan", "miód"],
			recipe:
				"Ugotuj płatki na mleku, dodaj pokrojonego banana i łyżeczkę miodu.",
			nutritionalInfo: { calories: 300, protein: 10, fat: 5, carbs: 50 },
		},
		{
			name: "Kanapki z awokado",
			price: 12,
			ingredients: [
				"chleb pełnoziarnisty",
				"awokado",
				"pomidor",
				"sól",
				"pieprz",
			],
			recipe:
				"Rozgnieć awokado, nałóż na chleb, dodaj plasterki pomidora, dopraw solą i pieprzem.",
			nutritionalInfo: { calories: 250, protein: 8, fat: 18, carbs: 25 },
		},
		{
			name: "Jogurt z granolą",
			price: 7,
			ingredients: ["jogurt grecki", "granola", "owoce sezonowe", "miód"],
			recipe:
				"Do miski włóż jogurt, posyp granolą, dodaj pokrojone owoce i polej miodem.",
			nutritionalInfo: { calories: 280, protein: 12, fat: 10, carbs: 40 },
		},
		{
			name: "Omlet z warzywami",
			price: 10,
			ingredients: ["jajka", "papryka", "cebula", "ser", "masło"],
			recipe:
				"Roztrzep jajka, dodaj pokrojone warzywa i ser. Smaż na maśle z obu stron.",
			nutritionalInfo: { calories: 320, protein: 20, fat: 22, carbs: 8 },
		},
	],
	lunch: [
		{
			name: "Spaghetti Bolognese",
			price: 22,
			ingredients: [
				"makaron",
				"mięso mielone",
				"pomidory",
				"cebula",
				"czosnek",
			],
			recipe:
				"Usmaż mięso z cebulą i czosnkiem, dodaj pomidory. Gotuj sos, podawaj z makaronem.",
			nutritionalInfo: { calories: 450, protein: 25, fat: 15, carbs: 60 },
		},
		{
			name: "Kotlet schabowy",
			price: 25,
			ingredients: ["schab", "jajko", "bułka tarta", "olej"],
			recipe: "Rozbij mięso, panieruj w jajku i bułce tartej, smaż na oleju.",
			nutritionalInfo: { calories: 350, protein: 30, fat: 20, carbs: 15 },
		},
		{
			name: "Ryż z kurczakiem curry",
			price: 20,
			ingredients: [
				"ryż",
				"pierś z kurczaka",
				"mleko kokosowe",
				"curry",
				"warzywa",
			],
			recipe:
				"Usmaż kurczaka, dodaj warzywa i curry, zalej mlekiem kokosowym. Podawaj z ryżem.",
			nutritionalInfo: { calories: 400, protein: 28, fat: 18, carbs: 45 },
		},
		{
			name: "Sałatka Cezar",
			price: 18,
			ingredients: [
				"sałata rzymska",
				"kurczak grillowany",
				"grzanki",
				"parmezan",
				"sos cezar",
			],
			recipe:
				"Pokrój sałatę, dodaj grillowanego kurczaka, grzanki i parmezan. Polej sosem cezar.",
			nutritionalInfo: { calories: 320, protein: 25, fat: 22, carbs: 12 },
		},
		{
			name: "Pierogi ruskie",
			price: 15,
			ingredients: ["mąka", "jajka", "ziemniaki", "twaróg", "cebula"],
			recipe:
				"Przygotuj ciasto, zrób farsz z ziemniaków i twarogu, ulep pierogi i ugotuj.",
			nutritionalInfo: { calories: 380, protein: 15, fat: 8, carbs: 65 },
		},
	],
	dinner: [
		{
			name: "Sałatka z grillowanym kurczakiem",
			price: 24,
			ingredients: ["kurczak", "sałata", "pomidor", "ogórek", "oliwa"],
			recipe:
				"Grilluj kurczaka, pokrój warzywa, połącz składniki i skrop oliwą.",
			nutritionalInfo: { calories: 300, protein: 25, fat: 15, carbs: 10 },
		},
		{
			name: "Zupa krem z dyni",
			price: 16,
			ingredients: ["dynia", "cebula", "bulion", "śmietana"],
			recipe:
				"Usmaż cebulę, dodaj dynię i bulion. Gotuj, zmiksuj, dodaj śmietanę.",
			nutritionalInfo: { calories: 200, protein: 5, fat: 10, carbs: 25 },
		},
		{
			name: "Łosoś z warzywami",
			price: 28,
			ingredients: [
				"filet z łososia",
				"brokuły",
				"marchew",
				"cytryna",
				"oliwa",
			],
			recipe:
				"Piecz łososia w folii z warzywami, skrop sokiem z cytryny i oliwą.",
			nutritionalInfo: { calories: 350, protein: 30, fat: 22, carbs: 15 },
		},
		{
			name: "Risotto z grzybami",
			price: 22,
			ingredients: [
				"ryż arborio",
				"grzyby",
				"cebula",
				"białe wino",
				"parmezan",
			],
			recipe:
				"Smaż cebulę i grzyby, dodawaj stopniowo ryż i wino. Na koniec dodaj parmezan.",
			nutritionalInfo: { calories: 400, protein: 12, fat: 15, carbs: 55 },
		},
		{
			name: "Tarta ze szpinakiem i fetą",
			price: 20,
			ingredients: [
				"ciasto francuskie",
				"szpinak",
				"ser feta",
				"jajka",
				"śmietana",
			],
			recipe:
				"Wyłóż formę ciastem, dodaj podsmażony szpinak, pokruszoną fetę i zalej jajkami ze śmietaną. Piecz.",
			nutritionalInfo: { calories: 320, protein: 15, fat: 22, carbs: 25 },
		},
	],
};

let currentMealType = null;
let currentMaxPrice = 30;
let recentMeals = [];
let currentMeal = null;
let priceCategory = null;

const mealElement = document.getElementById("meal");
const recipeElement = document.getElementById("recipe");
const breakfastButton = document.getElementById("breakfast");
const lunchButton = document.getElementById("lunch");
const dinnerButton = document.getElementById("dinner");
const cheapButton = document.getElementById("cheap");
const expensiveButton = document.getElementById("expensive");
const maxPriceSlider = document.getElementById("max-price");
const priceDisplay = document.getElementById("price-display");
const recentMealsList = document.getElementById("recent-meals");
const shoppingListElement = document.getElementById("shopping-list");
const searchGoogleButton = document.getElementById("search-google");

function setBackgroundColor(mealType) {
	const colors = {
		breakfast: "linear-gradient(180deg, #03d5ff 0%, #0099ff 100%)", // Jasnoniebieski
		lunch: "linear-gradient(180deg, #ffcc00 0%, #FF8C00 100%)",
		dinner: "linear-gradient(180deg, #00db96 0%, #00d10e 100%)",
	};
	document.body.style.background = colors[mealType];
}

function getRandomMeal(mealType, maxPrice) {
	let mealList = meals[mealType].filter(meal => meal.price <= maxPrice);
	if (priceCategory === "cheap") {
		mealList = mealList.filter(meal => meal.price <= 15);
	} else if (priceCategory === "expensive") {
		mealList = mealList.filter(meal => meal.price > 15);
	}
	return mealList[Math.floor(Math.random() * mealList.length)];
}

function updateMeal() {
	if (currentMealType) {
		const meal = getRandomMeal(currentMealType, currentMaxPrice);
		if (meal) {
			currentMeal = meal;
			mealElement.textContent = meal.name;
			recipeElement.textContent = `${meal.recipe}`;
			addToRecentMeals(meal);
			updateShoppingList(meal);
		} else {
			mealElement.textContent = "Brak pasujących dań";
			recipeElement.textContent = "";
			currentMeal = null;
			updateShoppingList(null);
		}
	}
}

function addToRecentMeals(meal) {
	if (!recentMeals.find(m => m.name === meal.name)) {
		recentMeals.unshift(meal);
		if (recentMeals.length > 3) {
			recentMeals.pop();
		}
		updateRecentMealsList();
	}
}

function updateRecentMealsList() {
	recentMealsList.innerHTML = recentMeals
		.map(meal => `<li>${meal.name}</li>`)
		.join("");
}

function updateShoppingList(meal) {
	if (meal) {
		shoppingListElement.innerHTML = meal.ingredients
			.map(item => `<li>${item}</li>`)
			.join("");
	} else {
		shoppingListElement.innerHTML = "";
	}
}

function setMealType(mealType) {
	currentMealType = mealType;
	setBackgroundColor(mealType);
	updateMeal();

	[breakfastButton, lunchButton, dinnerButton].forEach(button => {
		button.classList.remove("active");
	});
	document.getElementById(mealType).classList.add("active");
}

function setPriceCategory(category) {
	priceCategory = category;
	[cheapButton, expensiveButton].forEach(button => {
		button.classList.remove("active");
	});
	document.getElementById(category).classList.add("active");
	updateMeal();
}

breakfastButton.addEventListener("click", () => setMealType("breakfast"));
lunchButton.addEventListener("click", () => setMealType("lunch"));
dinnerButton.addEventListener("click", () => setMealType("dinner"));
cheapButton.addEventListener("click", () => setPriceCategory("cheap"));
expensiveButton.addEventListener("click", () => setPriceCategory("expensive"));

mealElement.addEventListener("click", updateMeal);

maxPriceSlider.addEventListener("input", function () {
	currentMaxPrice = parseInt(this.value);
	priceDisplay.textContent = `Max cena: ${currentMaxPrice} zł`;
	updateMeal();
});

searchGoogleButton.addEventListener("click", function () {
	if (currentMeal) {
		window.open(
			`https://www.google.com/search?q=${encodeURIComponent(currentMeal.name)}`,
			"_blank"
		);
	}
});

// Inicjalizacja
setMealType("breakfast");
