import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
  imports: [CommonModule, FormsModule]
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  saveProduto(): void {
    this.produtoService.saveProduto(this.produto).subscribe(
      (produto) => console.log(produto),
      (error) => console.error(error)
    );
  }
}
