import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
  imports: [CommonModule]
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      (produtos) => this.produtos = produtos,
      (error) => console.error(error)
    );
  }

  deleteProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(
      () => this.produtos = this.produtos.filter(produto => produto.id !== id),
      (error) => console.error(error)
    );
  }
}
