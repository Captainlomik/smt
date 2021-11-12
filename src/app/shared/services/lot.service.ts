import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lot } from '../interfaces';
import { catchError, map } from 'rxjs/operators';

const baseUrl = './assets/lot.json'

@Injectable({
  providedIn: 'root'
})
export class LotService {

  errorMessage: String = ""

  constructor(private http: HttpClient) { } 

  getAll(): Observable<Lot[]> {
    return this.http.get<Lot[]>(baseUrl).pipe(map((data: any) => {
      let lotList = data['lotList'];
      return lotList.map(function (lot: any): Lot {
        return (lot)
      })
    }),

      catchError(err => {
        console.error(err)
        this.errorMessage = err.message;
        return []
      }))
  }


  getById(id: number): Observable<Lot> {
    return this.http.get<Lot>(`${baseUrl}/lotlist/${id}`)
  }
}
