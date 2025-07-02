import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../models/countries.models';



@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/all?fields=name,flags`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getCountry(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/alpha/${code}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getCountryList(list: string[]): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/alpha?codes=${list.join(',')}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
