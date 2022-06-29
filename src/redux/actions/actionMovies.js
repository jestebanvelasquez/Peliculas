
const apiKey = '32b078fe';

export function getMovies (title){
    return function (dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
                    .then(response => response.json())
                    .then(json=>{
                        return dispatch({
                            type:'GET_MOVIES',
                            payload: json.Search
                        })
                    })
    }
}

export  function detailMovie (id) {
    return function (dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
                    .then(r => r.json())
                    .then(json =>{
                        console.log(json)
                        return dispatch({
                            type: 'DETAIL_MOVIE',
                            payload: json
            })
        })
    } 
}

export  function favorites (payload) {
    return {
        type: 'FAVORITES',
        payload: payload
    }
}



export  function deleteFavorite (id) {
    return {
        type: 'DELETE_FAVORITE',
        payload: id
    }
}