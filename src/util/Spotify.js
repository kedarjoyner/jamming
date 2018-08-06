let accessToken = '';
let authorizeUrl = 'https://accounts.spotify.com/authorize?';
const clientId = 'client_id=04772450bf1842468d319210630d7c46';
const responseType = '&response_type=token';
const redirectUri = '&redirect_uri=http://localhost:3000/callback';
const scope = '&scope=playlist-modify-public';


let Spotify = {

    getAccessToken(){      
        authorizeUrl += `${clientId}${redirectUri}${scope}${responseType}`;
     
     if( accessToken ) {
        return accessToken;

     } else if( accessToken !== undefined && accessToken !== null ) {
        const url = window.location.href;
        accessToken = url.match(/access_token=([^&]*)/);
        let expiresIn = url.match(/expires_in=([^&]*)/);

        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');

     } else {
        window.location = authorizeUrl;

     }

    //  fetch(endpoint, {
    //     method: "GET", // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //         'Authorization': 'Bearer ' + accessToken,
    //     }
    //  }).then(response => {
    //      if(response.ok) {
    //          return response;
    //      }
    //      throw new Error('Request failed!');

    //     }, networkError => {

    //     console.log(networkError.message)

    //     }).then(response => {
    //         console.log(response);
    //     });
    // } 
    }  
}


export default Spotify;
