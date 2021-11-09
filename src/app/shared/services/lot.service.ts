import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lot } from '../interfaces';

const baseUrl = './assets/lot.json'

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Lot[]> {
    return this.http.get<Lot[]>(baseUrl)
  }

  getById(id: number): Observable<Lot> {
    return this.http.get<Lot>(`${baseUrl}/lotlist/${id}`)
  }
}
