import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:8000/api/produtos'; // Ajuste para o URL da sua API

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  saveProduto(produto: Produto): Observable<Produto> {
    if (produto.id) {
      return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
    } else {
      return this.http.post<Produto>(this.apiUrl, produto);
    }
  }

  deleteProduto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
