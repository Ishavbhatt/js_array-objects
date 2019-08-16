var myPenguin = {
				  name : "Misha",
				  origin : "Death and the Penguin, Penguin Lost",
				  author : "Andrey Kurkov"
			};
1. myPenguin.favoriteFoods = ["peanuts", "grapes", "mango"];
 
2. console.log(myPenguin.favoriteFoods[1]);

3. var firstFavFood = myPenguin.favoriteFoods[0];
   console.log(firstFavFood);

4. myPenguin.favoriteFoods.push("apple");

5. console.log(myPenguin.favoriteFoods.length);

6. myPenguin.favoriteFoods[4] = "pineapples";
   console.log(myPenguin.favoriteFoods[3]);

7. var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length -1]

   console.log(lastFavFood);

8. for(var i = 0; i < myPenguin.favoriteFoods.length; i++){
   console.log(myPenguin.favoriteFoods[i])
   }
