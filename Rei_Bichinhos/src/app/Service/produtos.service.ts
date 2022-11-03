import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Produto } from '../Interface/Produto';


const apiUrl = "http://localhost:3000/produtos";
let httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(apiUrl, httpHeaders);

  }

  getProdutoById(id: any): Observable<Produto> {
    const url = `${apiUrl}/${id}`
    return this.http.get<Produto>(url, httpHeaders);
  }

  postProduto(Produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(apiUrl, Produto, httpHeaders);
  }

  putProduto(id: any, Produto: Produto): Observable<Produto> {
    const url = `${apiUrl}/${id}`
    return this.http.put<Produto>(url, Produto, httpHeaders);
  }

  delProduto(id: any): Observable<Produto> {
    const url = `${apiUrl}/${id}`
    return this.http.delete<Produto>(url);
  }

}
