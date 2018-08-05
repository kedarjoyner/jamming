const accessToken = '';
const authorizeUrl = 'https://accounts.spotify.com/authorize?';
const clientId = 'client_id=04772450bf1842468d319210630d7c46';
const responseType = '&response_type=token';
const redirectUri = '&redirect_uri=http://localhost:3000/callback/';
const scope = '&scope=playlist-modify-public'


let Spotify = {

    getAccessToken(){
      
     const endpoint = `${authorizeUrl}${clientId}${redirectUri}${scope}${responseType}`;

     fetch(endpoint).then(response => {
         if(response.ok) {
             return response;
         }
         throw new Error('Request failed!');

        }, networkError => {

        console.log(networkError.message)

        }).then(response => {
            // renderResponse(jsonResponse);
            console.log(response);
        });
    }   
}


export default Spotify;
