const url = 'https://free-api-live-football-data.p.rapidapi.com/football-popular-leagues';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f38fced365mshb6f61bda382be8cp13d992jsn1106ecbc3bcc',
		'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
	}
};
async function CallingJson()
{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        

         console.log(result);
         console.log(result.response.popular[0].name);

        const showLeague = document.getElementById('leagueInfo')

            const info = `
            
            <div>${result.response.popular[0].name}</div>
            
            `;
            showLeague.innerHTML += info;



    } catch (error) {
        console.error(error);
    }

}
CallingJson();