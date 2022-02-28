export const getMovies = async() => {

    const url = `https://ghibliapi.herokuapp.com/films`;
    const resp = await fetch( url ).then( response => {
        return response.json();
    });

    const movies = resp.map( value => {
        return value
    });

    return movies;
}