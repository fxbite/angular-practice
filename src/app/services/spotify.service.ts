import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getToken() {
    const clientId = 'de420b38dea74491a724341f4a9fdc67';
    const clientSecret = 'f77efcdc6680480f8061d5189f0d116e';
    const urlAPI = 'https://accounts.spotify.com/api/token'
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', clientId);
    body.set('client_secret', clientSecret);
    return this.http.post(urlAPI, body.toString(), { headers })
  }

  searchArtist(search: string, { type = 'artist', limit = 20, offset = 0 }) {
    const urlAPI = `https://api.spotify.com/v1/search?q=${search}&type=${type}&limit=${limit}&offset=${offset}`;
    return this.http.get(urlAPI)
  }

  getArtistTopTracks(artistId: string, market = 'US') {
    const urlAPI = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=${market}`
    return this.http.get(urlAPI)
  }
}
