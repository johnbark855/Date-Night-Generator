/*
 
 This API get is a song finder

*/

const music = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
};
$.ajax(settings).done(function (response) {
	console.log(response);
});


/*

This API get is for food receipes

*/

function spoonApiCall() {
  let api_Key = "";
  let endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_Key}&includeIngredients=${ingredients}`;

  $.ajax({
    url: endpoint,
    method: "GET",
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert(
        "Sorry, but this search generated an error.  Please try again! " +
          "\n Details: Status =" +
          XMLHttpRequest.status +
          ", Status Text: " +
          XMLHttpRequest.statusText
      );
      housekeeping();
      return;
    },
  }).then(function (response) {
    JSON.stringify.response;
    console.log("JSON Spoontacular Payload: " + response);
    spoonLength = response.results.length;
    displayResults(response, spoonLength);
  });
  console.log("Length of JSON-returned list " + spoonLength);
}

/*
  
 This api is to get local area resturants

 */

const restaurants = {
	"async": true,
	"crossDomain": true,
	"url": "https://documenu.p.rapidapi.com/restaurants/zip_code/6824?size=30&cuisine=Italian&fullmenu=true&top_cuisines=true&page=2",
	"method": "GET",
	"headers": {
		"x-api-key": "71b5bfaf79305a51800a453a79324cf8",
		"x-rapidapi-key": "588216e7famsh2752fb22e9ec682p17fa74jsn07240aafab1d",
		"x-rapidapi-host": "documenu.p.rapidapi.com"
	}
};
$.ajax(settings).done(function (response) {
	console.log(response);
});
