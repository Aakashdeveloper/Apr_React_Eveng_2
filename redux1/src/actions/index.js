export function moviesList(){
    return{
        type:'MOVIE_LIST',
        payload:[
            {id:1,name:'Death Race'},
            {id:2,name:'Madmax'},
            {id:3,name:'Avengers'}
        ]
    }
}