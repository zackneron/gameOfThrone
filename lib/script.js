
// function loadDataAPI(){
// 	// Create XHR Object
// 	var xhr = new XMLHttpRequest();

// 	// Open - type, url/file, async
// 	xhr.open('GET', 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2018-03-14&' +
//           'sortBy=popularity&' +
//           'apiKey=9bad811c91dd45c2967ad4becc6cf294'  , true);
	
// 	xhr.onload = function(){
// 		if(this.status == 200){
// 			var users = JSON.parse(this.responseText);

// 			var output = '';
// 			for(var i in users){
// 				output +=
// 				'<div class="col-sm-6 col-md-4 mb-3 onHover">' +
// 					'<div class="ticker ticker--brown"><span>Spoiler Alert</span></div>' +
// 					'<div class="card card--items">' +
// 						'<img class="card-img-top" src="' + users[i].urlToImage + '" alt="Card image cap">' +
// 						'<div class="card-body card-body--item">' +
// 							'<h5 class="card-title card-title--item">' + 
// 						 		users[i].author + ' ' + users[i].publishedAt + 
// 						 	'</h5>' +
// 							'<p class="card-text card-text--item">' + 
// 								users[i].description + 
// 							'</p>' +
// 						'</div>' +
// 					'</div>' +
// 					'<div class="reveal">' +
// 						'<h5 class="card-title card-title--reveal">This Game of Thrones Theory Exposes the Night King\'s Possible Wicked Plan</h5>' +
// 						'<p>The most recent season of Game of Thrones left us all shaken. In the final moments of the final episode, the Night King destroys the Wall, which is basically the only barrier between the far North\'s frozen undead wasteland and the rest of... </p>' +
// 						'<button type="button" class="btn reveal__btn btn-outline-primary">Read More</button>' +
// 					'</div>' +

// 				'</div>';
// 			}

// 			document.getElementById('users').innerHTML = output;
// 		}
// 	}

// 	xhr.send();
// }


function loadDataAPI(){
	// Create XHR Object
	var xhr = new XMLHttpRequest();

	// Open - type, url/file, async
	xhr.open('GET', 'https://api.github.com/users'  , true);
	
	xhr.onload = function(){
		if(this.status == 200){
			var users = JSON.parse(this.responseText);

			var output = '';
			for(var i in users){
				output +=
				'<div class="col-sm-6 col-md-4 mb-3 onHover">' +
					'<div class="ticker ticker--brown"><span>Spoiler Alert</span></div>' +
					'<div class="card card--items">' +
						'<img class="card-img-top card-img--thumb" src="' + users[i].avatar_url + '" alt="Card image cap">' +
						'<div class="card-body card-body--item">' +
							'<h5 class="card-title card-title--item">' + 
						 		users[i].login + ' ' + users[i].id + 
						 	'</h5>' +
							'<p class="card-text card-text--item">' + 
								users[i].type + 
							'</p>' +
						'</div>' +
					'</div>' +
					'<div class="reveal">' +
						'<h5 class="card-title card-title--reveal">This Game of Thrones Theory Exposes the Night King\'s Possible Wicked Plan</h5>' +
						'<p>The most recent season of Game of Thrones left us all shaken. In the final moments of the final episode, the Night King destroys the Wall, which is basically the only barrier between the far North\'s frozen undead wasteland and the rest of... </p>' +
						'<button type="button" class="btn reveal__btn btn-outline-primary">Read More</button>' +
					'</div>' +

				'</div>';
			}

			document.getElementById('users').innerHTML = output;
		}
	};

	xhr.send();
}