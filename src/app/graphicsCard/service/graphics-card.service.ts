import { environment } from '../../../environments/environment';
import { GraphicsCard } from '../models/graphics-card';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphicsCardService {

  private baseUrl: string = environment.baseUrl

  constructor( private http: HttpClient) { }

  getAllCards(): Observable<GraphicsCard[]> {
    return this.http.get<GraphicsCard[]>(`${this.baseUrl}/graphics-cards`);
  }

  getCardById( id: string ): Observable<GraphicsCard>{
    return this.http.get<GraphicsCard>(`${this.baseUrl}/graphics-cards/${id}`);
  }
}
