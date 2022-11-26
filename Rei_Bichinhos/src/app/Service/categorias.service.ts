import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Interface/Categoria';

const apiUrl = "http://localhost:3000/categorias";
let httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(apiUrl, httpHeaders);

  }

  getCategoriaById(id: any): Observable<Categoria> {
    const url = `${apiUrl}/${id}`
    return this.http.get<Categoria>(url, httpHeaders);
  }

  postCategoria(Categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(apiUrl, Categoria, httpHeaders);
  }

  putCategoria(id: any, Categoria: Categoria): Observable<Categoria> {
    const url = `${apiUrl}/${id}`
    return this.http.put<Categoria>(url, Categoria, httpHeaders);
  }

  delCategoria(id: any): Observable<Categoria> {
    const url = `${apiUrl}/${id}`
    return this.http.delete<Categoria>(url, httpHeaders);
  }
}