const beerJson = `[{"id":73,"name":"Black Eyed King Imp - Vietnamese Coffee Edition","tagline":"Vietnamese Coffee Edition.","first_brewed":"12/2014","description":"This is the Vietnamese Coffee Edition. At 12.7% ABV, Black Eyed King Imp is a super intense and twistedly complex brew, with intense notes of sweet vanilla, rich espresso, smooth molasses and bitter chocolate barely contained by the whatever container it's in.","image_url":"https://images.punkapi.com/v2/73.png","abv":12.7,"ibu":85,"target_fg":1038,"target_og":1113.5,"ebc":250,"srm":125,"ph":5.2,"attenuation_level":76.8,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":65,"unit":"celsius"},"duration":50}],"fermentation":{"temp":{"value":18,"unit":"celsius"}},"twist":"Coffee Beans: 12.5g at end, Lactose: 125g at FV, Bourbon barrel aged"},"ingredients":{"malt":[{"name":"Extra Pale","amount":{"value":6.25,"unit":"kilograms"}},{"name":"Wheat","amount":{"value":1.25,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":1.25,"unit":"kilograms"}},{"name":"Crystal","amount":{"value":1.5625,"unit":"kilograms"}},{"name":"Dark Crystal","amount":{"value":0.625,"unit":"kilograms"}},{"name":"Amber","amount":{"value":0.625,"unit":"kilograms"}},{"name":"Brown","amount":{"value":0.625,"unit":"kilograms"}},{"name":"Chocolate","amount":{"value":0.625,"unit":"kilograms"}},{"name":"Roasted Barley","amount":{"value":0.3125,"unit":"kilograms"}}],"hops":[{"name":"Magnum","amount":{"value":62.5,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Willamette","amount":{"value":31.25,"unit":"grams"},"add":"end","attribute":"bitter"},{"name":"First Gold","amount":{"value":31.25,"unit":"grams"},"add":"end","attribute":"aroma / bitter"}],"yeast":"Wyeast 1272 - American Ale II™"},"food_pairing":["Bacon sandwich with brown sauce","20hr smoked brisket","Chocolate fudge ice cream"],"brewers_tips":"Buying top notch coffee beans make a huge difference here. Give them a very course grind to get the most out of them.","contributed_by":"Sam Mason <samjbmason>"}]`;

const beerInfo = JSON.parse(beerJson);
const ingredients = beerInfo[0].ingredients;
// const {ingredients} = beerInfo[0];
console.log(ingredients);

ingredients.hops.forEach(hop => addIngredientAsP(hop.name));
ingredients.malt.forEach(m => addIngredientAsP(m.name));
addIngredientAsP(ingredients.yeast);

function addIngredientAsP(ingredient){
    const p = document.createElement('p');
    document.body.append(p);
    p.innerText = ingredient;
}


// for(const property in ingredients){
//     console.log();
//     if(Array.isArray(ingredients[property])){
//         ingredients[property].forEach(ingredient => {
//             // console.log(hop.name);
//             addIngredientAsP(ingredient.name);
//         });
//     }
//     else if(typeof ingredients[property] === 'string'){
//         console.log(ingredients[property]);
//         addIngredientAsP(ingredients[property]);
//     }
// }