const url = 'https://free-api-live-football-data.p.rapidapi.com/football-popular-leagues';
const url2 = 'https://free-api-live-football-data.p.rapidapi.com/football-get-list-all-team?leagueid=42';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f38fced365mshb6f61bda382be8cp13d992jsn1106ecbc3bcc',
		'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
	}
};
const clubLocations = [0, 23 ,2,18,12,1, 24,15, 14, 6];

const container = document.createElement('div');
const leagueDisplay = document.getElementById('leagueInfo');
container.setAttribute('class', 'container');
leagueDisplay.appendChild(container);

async function CallingJson(){
    try {
        
        const response = await fetch(url, options);
        const result = await response.json();
        
        const response2 = await fetch(url2, options);
        const result2 = await response2.json();
        console.log(result);
        const clubs = result2.response.list
        console.log(result.response.popular[0].name);

        //const showLeague = document.getElementById('leagueInfo')
        const name =result.response.popular[0].name;
        let indexCounter = 0;
        result.response.popular.forEach(element => {
            
            //const info = `
            
            //<img src="${element.logo}">
            //<div>${element.name}</div>


            //`;
            console.log(element.logo)
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
  
            const image = document.createElement(`img`);
            image.src = element.logo;
            image.setAttribute('alt', `${element.logo} League`);
            card.appendChild(image);

            const paragraph = document.createElement('p')
  
            const h1 = document.createElement('h1');
            h1.textContent = element.name;
            card.appendChild(h1);
            

            const p = document.createElement('p');
            p.textContent = clubs[clubLocations[indexCounter]].name;
            card.appendChild(p);
            container.appendChild(card);
            indexCounter++;
            //showLeague.innerHTML += info;
        });

    } catch (error) {
        console.error(error);
    }
    
}
CallingJson();

