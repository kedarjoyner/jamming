let accessToken = '';
let expiresIn;
let authorizeUrl = 'https://accounts.spotify.com/authorize?';
const clientId = 'client_id=04772450bf1842468d319210630d7c46';
const responseType = '&response_type=token';
const redirectUri = '&redirect_uri=http://localhost:3000/';
const scope = '&scope=playlist-modify-public';


let Spotify = {

    getAccessToken(){      
       const accessUrl = `${authorizeUrl}${clientId}${responseType}${scope}${redirectUri}`;


        const url = window.location.href;
        const getToken = url.match(/access_token=([^&]*)/);
        const getExpiration = url.match(/expires_in=([^&]*)/);

        if (accessToken) {
            return accessToken;
        }

        if ( getToken && getExpiration ) {
            accessToken = getToken[1];
            expiresIn = Number(getExpiration[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;  

        } else {
            window.location = accessUrl;
        }

    },

    search(term){
        Spotify.getAccessToken();
        const url = 'https://api.spotify.com/v1/search?'
        const tracks = 'type=track';
        const query = `&q=${term}`;
        const endpoint = `${url}${tracks}${query}`;
              
        return fetch(endpoint, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
              }
              return jsonResponse.tracks.items.map(track => ({id: track.id, name: track.name, artist: track.artists[0].name, album: track.album.name, uri: track.uri}));
        });

    }, 
    savePlaylist(playlistName, trackURIs){
        if( playlistName && trackURIs ) {
            const accessToken = Spotify.getAccessToken();
            const headers =  { Authorization: 'Bearer ' + accessToken };
            let user_id;

            fetch('https://api.spotify.com/v1/me', {

                headers: headers

            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
                   throw new Error('Request failed!');
            }, networkError => console.log(networkError.message)

            ).then(jsonResponse => {
                console.log(jsonResponse);
                user_id = jsonResponse.id; 

                return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ name: playlistName })

                }).then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Request failed!');

                }, networkError => {
                    console.log(networkError.message);

                }).then(jsonResponse => {
                    let playlist_id = jsonResponse.id;

                    return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({ uris: trackURIs })

                    }).then(response => {
                        if(response.ok) {
                            return response.json();
                        }
                        throw new Error('Request failed!');
                    }, networkError => {
                        console.log(networkError.message);
                    }).then(jsonResponse => jsonResponse);
                });
            });
        } else {
            return;
        }
    }

}


export default Spotify;
