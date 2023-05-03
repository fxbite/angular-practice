import { Injectable } from '@angular/core';
import { SpotifyService } from './services/spotify.service'; 
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private spotifyService: SpotifyService, private cookie: CookieService) { }

  initSpotifyToken() {
    const expireTime = 50 / 1440 // By date
    if(!this.cookie.check('token')) {
      this.spotifyService.getToken().subscribe((data: any) => {
        const token = data['access_token'] as string
        this.cookie.set('token', token, expireTime)
      })
    }
  }
}
