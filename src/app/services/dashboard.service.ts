import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  worldAPI = 'https://covid19-merlin.vercel.app/api/world'
  countriesAPI = 'https://covid19-merlin.vercel.app/api/countries'
  customHttpClient: HttpClient

  constructor(backend: HttpBackend) { 
    this.customHttpClient = new HttpClient(backend)
  }

  getWorldWideCovid19Data() {
    return this.customHttpClient.get(this.worldAPI)
  }

  getCountriesCovid19Data() {
    return this.customHttpClient.get(this.countriesAPI)
  }
}
