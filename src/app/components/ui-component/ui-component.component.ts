import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { VideoPagination } from 'src/app/types/youtube'; 
import { OptionSearch, OptionOrder } from 'src/app/types/youtube';
import {faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ui-component',
  templateUrl: './ui-component.component.html',
  styleUrls: ['./ui-component.component.scss'],
})
export class UiComponentComponent implements OnInit{
  settingIcon = faGear
  sidebarVisible!: boolean
  debounceValue!: string
  apiKeyValue!: string
  first: number = 0;
  rows: number = 10;
  dataResult!: VideoPagination
  date!: Date
  order: OptionOrder[] = [
    {
      name: 'Date',
      value: 'date'
    },
    {
      name: 'Rating',
      value: 'rating'
    },
    {
      name: 'Relevance',
      value: 'relevance'
    },
    {
      name: 'Title',
      value: 'title'
    },{
      name: 'Video Count',
      value: 'videoCount'
    },
    {
      name: 'View Count',
      value: 'viewCount'
    }
  ]
  selectedOrder!: OptionOrder;

  constructor(private youtubeService: YoutubeService) {}


  ngOnInit(): void {}

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
  }

  getVideo(search: string, option?: OptionSearch) {
    this.youtubeService.searchVideo(search, option).subscribe((data: any) => {
      this.dataResult = {
        nextPage: data['nextPageToken'],
        previousPage: data['prevPageToken'],
        items: data['items'].map((value: any) => {
          const formatData = {
            title: value['snippet']['title'] as string,
            description: value['snippet']['description'] as string,
            thumbnail: value['snippet']['thumbnails']['high']['url'] as string,
            embedURL: `https://www.youtube.com/embed/${value['id']['videoId']}`,
            channelURL: `https://www.youtube.com/channel/${value['snippet']['channelId']}`,
            channelTitle: value['snippet']['channelTitle'] as string,
            published: value['publishedAt'] as string
          }
          return formatData
        })
      } 
    })
  }
}

