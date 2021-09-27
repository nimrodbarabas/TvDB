export interface Search {
    adult : boolean
    backdrop_path : string
    genre_ids : any
    genre_id : any
    id : number
    original_language : string
    original_title ?: string
    overview : string
    popularity : number
    poster_path : string
    release_date : string
    title : string
    vide : boolean
    vote_average : number
    vote_count : number
    original_name ?: string
    name ?: string
    first_air_date ?: string
    media_type ? : string
}


export interface SearchResponse {
    page : number
    results : Search[]
    total_pages : number
    total_results : number 
    
}