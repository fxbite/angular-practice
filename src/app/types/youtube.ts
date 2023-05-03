export interface Video {
    title: string,
    description: string,
    thumbnail: string,
    embedURL: string,
    channelURL: string,
    channelTitle: string,
    published: string
}

export interface VideoPagination {
    nextPage: string | null | undefined,
    previousPage: string | null | undefined,
    items: Video[]
}

export interface OptionSearch {
    currentPage?: string
    limit?: string | number,
    order?: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount',
    apiKey?: string
}

export interface OptionOrder {
    name: string,
    value: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount'
}