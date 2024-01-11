import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericSrvcService {
  
  constructor(private http: HttpClient) {}

  public getJsonData(): Observable<any> {
    return this.http.get<any>('assets/sampleData.json');
  }


}
