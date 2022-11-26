import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Usuario } from '../Interface/Usuario';

const apiUrl = "http://localhost:3000/usuarios";
let httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(apiUrl, httpHeaders);

  }

  getUsuarioById(id: any): Observable<Usuario> {
    const url = `${apiUrl}/${id}`
    return this.http.get<Usuario>(url, httpHeaders);
  }

  postUsuario(Usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(apiUrl, Usuario, httpHeaders);
  }

  putUsuario(id: any, Usuario: Usuario): Observable<Usuario> {
    const url = `${apiUrl}/${id}`
    return this.http.put<Usuario>(url, Usuario, httpHeaders);
  }

  delUsuario(id: any): Observable<Usuario> {
    const url = `${apiUrl}/${id}`
    return this.http.delete<Usuario>(url, httpHeaders);
  }


  getAuthToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  public login(user: any): Observable<any> {
    return this.http.post<any>(`${apiUrl}`, user);
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthToken();


    if (token) {
      return true;
    }
    return false
  }
}
