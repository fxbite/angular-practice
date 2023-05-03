import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Artist, Track } from '../../types/spotify';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent {
  search: string = ''
  artistData!: Artist[] 
  trackData!: Track[] 

  constructor(private spotifyService: SpotifyService) {}

  receiveArtistId($event: string) {
    this.getTrack($event)
  }

  getArtist(search: string) {
    this.spotifyService.searchArtist(search, {limit: 15}).subscribe((data: any) => {
      this.artistData = data.artists.items.map((value: any) => {
        const formatData = {
          id: value['id'] as string,
          name: value['name'] as string,
          image: value['images'][0]['url'] as string,
          genres: value['genres'] as string[],
          popularity: Math.round((value['popularity'] as number) / 20),
          followers: value['followers']['total'] as number,
          external_url: value['external_urls']['spotify'] as string
        }
        return formatData
      })
    })
  }

  getTrack(artistId: string) {
    this.spotifyService.getArtistTopTracks(artistId).subscribe((data: any) => {
      this.trackData = data['tracks'].map((value: any) => {
        const formatData = {
          image: value['album']['images'][0]['url'] as string,
          name: value['name'] as string,
          type: value['type'] as string,
          release_date: value['album']['release_date'] as string,
          preview_url: value['preview_url'],
          external_url: value['external_urls']['spotify'] as string
        }
        return formatData
      })
    })
  }
}
