import { Injectable } from '@angular/core';
import {ClientsModule} from './clients.module';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IClient} from '../../shared/models/Client';
import {Observable} from 'rxjs';
import {ISearchParams} from '../../shared/models/SearchParams';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  url: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getClients(search?: ISearchParams): Observable<IClient[]>{
    let httpParams = new HttpParams();
    if(search !== undefined){
      if(search.name){
        console.log(search.name);
        httpParams = httpParams.append('name', search.name);
      }
      if(search.email){
        httpParams = httpParams.append('email', search.email);
      }
      if(search.birthDate){
        httpParams = httpParams.append('birthDate', search.birthDate);
      }
      if(search.status){
        httpParams = httpParams.append('status', search.status);
      }
    }
    return this.http.get<IClient[]>(this.url + 'clients', {params: httpParams});
  }

  getClientById(id: number): Observable<IClient>{
    return this.http.get<IClient>(this.url + 'clients/' + id)
  }

  getClientFiles(id: number): Observable<IClient>{
    return this.http.get<IClient>(this.url + 'clientFiles/' + id)
  }

  uploadClientFile(id: number, value: any): Observable<any>{
    return this.http.post(this.url + 'clientFiles/' + id, value);
  }

}
