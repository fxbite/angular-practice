import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { World, Country, ChartConfiguration, ChartData } from '../../types/dashboard';
import {ScaleType} from '@swimlane/ngx-charts'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', './flag.css']
})
export class DashboardComponent implements OnInit {
  worldCovid19Data: World = {
    confirmed: '',
    recovered: '',
    deaths: '',
    fatalityRate: ''
  }

  countriesCovid19Data!: Country[]
  selectedCountry!: Country 

  chartData: ChartData = []
  chartConfiguration: ChartConfiguration = {
    responsive: true,
    legend: true,
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: true,
    showXAxisLabel: true,
    xAxisLabel: 'Year',
    yAxisLabel: 'Quantity',
    timeline: true,
    showRefLabels: true,
    colorScheme: {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
      name: 'coronaLineChart',
      selectable: true,
      group: ScaleType.Ordinal,
    },
  }

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getWorldWideCovid19Data()
      .subscribe((data: any) => {
        this.worldCovid19Data = {
          confirmed: this.numberWithCommas(data['dataFormat']['Confirmed'] as number),
          recovered: this.numberWithCommas(data['dataFormat']['Recovered'] as number),
          deaths: this.numberWithCommas(data['dataFormat']['Deaths'] as number),
          fatalityRate: data['dataFormat']['Fatality_Rate'] as number
        }

        this.chartData = [
          {
            name: 'Confirmed',
            series: [
              {
                name: "2020",
                value: 0
              },
              {
                name: '2023',
                value: data['dataFormat']['Confirmed'] as number
              }
            ]
          },
          {
            name: 'Recovered',
            series: [
              {
                name: "2020",
                value: 0
              },
              {
                name: '2023',
                value: data['dataFormat']['Recovered'] as number
              }
            ]
          },
          {
            name: 'Deaths',
            series: [
              {
                name: "2020",
                value: 0
              },
              {
                name: '2023',
                value: data['dataFormat']['Deaths'] as number
              }
            ]
          }
        ]
      });

    this.dashboardService.getCountriesCovid19Data()
      .subscribe((data: any) => {

        const covid19Countries = (data['dataFormat']).map((value: any) => (
          {
            countryId: value['CountryCode'] as string,
            countryName: value['CountryName'] as string,
            confirmed: this.numberWithCommas(value['Confirmed'] as number),
            recovered: this.numberWithCommas(value['Recovered'] as number),
            deaths: this.numberWithCommas(value['Deaths'] as number),
            fatalityRate: value['Fatality_Rate'] as number
          }
        )) as Country[]

        this.countriesCovid19Data = covid19Countries
        this.selectedCountry = covid19Countries.find(obj => obj.countryId === 'VN')  as Country
      })
  }

  numberWithCommas(value: number | string) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  onSelect(data: any) {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any) {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any) {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
