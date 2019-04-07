import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

	private baseURL="http://localhost:4000/items";

	constructor(private http:HttpClient) {}

	getAllItems():Observable<any>{
		return this.http.get(this.baseURL);
	}

	getItemsById(id:number):Observable<any>{
		return this.http.get(this.baseURL + '/' + id);
	}
}
