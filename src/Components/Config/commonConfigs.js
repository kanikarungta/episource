export const config = {
    Alcoholic: {
        type: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/list.php?a=list',
        headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "c624c9dbf8mshef435d1b3ab8f0bp1fdf8bjsn4da6da139ee9"
          },
        returnType: 'strAlcoholic'
    },
    Drinks: {
        type: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/list.php?c=list',
        headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "c624c9dbf8mshef435d1b3ab8f0bp1fdf8bjsn4da6da139ee9"
          },
        returnType: 'strCategory'
    },
    Ingredients: {
        type: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/list.php?i=list',
        headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "c624c9dbf8mshef435d1b3ab8f0bp1fdf8bjsn4da6da139ee9"
          },
        returnType: 'strIngredient1'
    },
    Glasses: {
        type: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/list.php?g=list',
        headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "c624c9dbf8mshef435d1b3ab8f0bp1fdf8bjsn4da6da139ee9"
          },
        returnType: 'strGlass'
    }
}
