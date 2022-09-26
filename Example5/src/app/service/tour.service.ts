import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../model/tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  findAllTours(): Observable<Tour[]> {
    return this.httpClient.get<Tour[]>("http://localhost:3000/tuors")
  }

  findTourById(id?: number): Observable<Tour> {
    return this.httpClient.get<Tour>("http://localhost:3000/tuors/" + id)
  }

  createTour(tour?: Tour): Observable<Tour> {
    return this.httpClient.post<Tour>("http://localhost:3000/tuors", tour)
  }

  deleteTour(id?: number) {
    return this.httpClient.delete("http://localhost:3000/tuors/" + id)
  }

  updateTour(id?: number, tour?: Tour): Observable<Tour> {
    return this.httpClient.put<Tour>("http://localhost:3000/tuors/" + id, tour)
  }
}
