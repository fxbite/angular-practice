export interface SpotifyToken {
    access_token: string,
    token_type: string,
    expires_in: number
}

export interface Artist {
    id: string,
    name: string,
    image: string,
    genres: string[],
    popularity: number,
    followers: number,
    external_url: string
}

export interface Track {
    image: string,
    name: string,
    type: string,
    release_date: string,
    preview_url: string | null | undefined,
    external_url: string
}