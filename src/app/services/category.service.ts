import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

	private baseURL="http://localhost:4000/categories";
	private catergoryItemUrl = "http://localhost:4000/category-items/"

	constructor(private http:HttpClient) {}


	getAllCategories():Observable<any>{
		return this.http.get(this.baseURL);
	}

	getAllItemsByCategory(brand:string):Observable<any>{
		return this.http.get(this.catergoryItemUrl+brand);
	}
}
