let accessToken = '';
let expiresIn;
let authorizeUrl = 'https://accounts.spotify.com/authorize?';
const clientId = 'client_id=04772450bf1842468d319210630d7c46';
const responseType = '&response_type=token';
const redirectUri = '&redirect_uri=http://localhost:3000/';
const scope = '&scope=playlist-modify-public';


let Spotify = {

    getAccessToken(){      
        authorizeUrl += `${clientId}${redirectUri}${scope}${responseType}`;
        const url = window.location.href;
        const getToken = url.match(/access_token=([^&]*)/);
        const getExpiration = url.match(/expires_in=([^&]*)/);

        if ( getToken != null ) {

            accessToken = getToken;

            if ( getExpiration ) {
                expiresIn = getExpiration;
    
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
            }

        } else if( accessToken === '' || getToken === null ) {
            window.location = authorizeUrl;

        } else {
            console.log('no acesss token');
        }

    },

    search(term){

        this.getAccessToken();
        const url = 'https://api.spotify.com/v1/search?'
        const tracks = 'type=track';
        const query = `&q=${term}`;
        const endpoint = `${url}${tracks}${query}`;
              
        fetch(endpoint, {
            metod: 'GET',
            header: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            console.log('success!');
        });

    } 
}


export default Spotify;
