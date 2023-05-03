import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { OptionSearch } from '../types/youtube';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  customHttpClient: HttpClient
  youtubeAPI = 'https://www.googleapis.com/youtube/v3/search'
  key = 'AIzaSyA4KV9XudnILw7rBeqcqdq6rvJ5SPdfG-I'
  // key = 'AIzaSyCySQtdj1xubisRf5PynZd3AK-Qc2f-nVQ'
  limit = 6

  constructor(backend: HttpBackend) { 
    this.customHttpClient = new HttpClient(backend)
  }

  searchVideo(search: string, option?: OptionSearch) {
    const params = new HttpParams()
      .set('key', option?.apiKey ? option.apiKey : this.key)
      .set('q', search)
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', option?.limit ? option.limit : this.limit)
      .set('pageToken', option?.currentPage ? option.currentPage : '');

    if(option?.order) params.set('order', option?.order)
    return this.customHttpClient.get(this.youtubeAPI, { params })
  }

}
