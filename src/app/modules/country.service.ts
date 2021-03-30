import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseModel } from './country/model/responseModel';
import { ShowCountry } from './country/model/showCountryModel';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json;charset=UTF-8'
    })
  };

  constructor(
    private http: HttpClient
  ) { }
  showCountry(): Observable<ResponseModel<Array<ShowCountry>>> {
    const url = environment.module.country.showCountry;
    return this.http.get<ResponseModel<Array<ShowCountry>>> (url, this.httpOption).pipe(
      tap(_ => console.log('showCountry succese'))
    );
  }

  searchCountry(showCountry: ShowCountry): Observable<ResponseModel<Array<any>>>{
    const url = environment.module.country.searchCountry;
    return this.http.post<ResponseModel<Array<ShowCountry>>>(url,showCountry, this.httpOption).pipe(
      tap(_ => console.log('searchCountry succese'))
    );
  }
}
