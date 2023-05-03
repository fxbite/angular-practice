import {Color} from '@swimlane/ngx-charts'

export interface World {
    confirmed?: number | string,
    recovered?: number | string,
    deaths?: number | string,
    fatalityRate?: number | string
}

export interface Country {
    countryId: string,
    countryName: string,
    confirmed: string | number,
    deaths: string | number,
    recovered: string | number,
    fatalityRate: string | number
}

export interface ChartConfiguration {
    responsive: boolean, 
    legend: boolean,
    showLabels: boolean,
    animations: boolean,
    xAxis: boolean,
    yAxis: boolean,
    showYAxisLabel: boolean,
    showXAxisLabel: boolean,
    xAxisLabel: string,
    yAxisLabel: string,
    timeline: boolean,
    showRefLabels: boolean,
    colorScheme: Color,
}

export type ChartData = { 
    name: string, 
    series: { name: string, value: number }[] 
}[]