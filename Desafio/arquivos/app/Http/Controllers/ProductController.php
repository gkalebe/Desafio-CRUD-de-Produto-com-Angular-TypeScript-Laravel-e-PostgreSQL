<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Retorna todos os produtos
        return Product::all();
    }

    public function store(Request $request)
    {
        // Valida os dados do request
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            
        ]);

        // Cria o produto com os dados validados
        $product = Product::create($validatedData);

        return response()->json($product, 201);
    }

    public function show($id)
    {
        // Retorna o produto específico ou falha se não encontrado
        return Product::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
       
        $product = Product::findOrFail($id);
        
        
        $product->update($request->all());

        // Retorna o produto atualizado com um código de status 200
        return response()->json($product, 200);
    }

    public function destroy($id)
    {
       
        Product::destroy($id);

        // Retorna null com um código de status 204 para indicar sucesso na exclusão
        return response()->json(null, 204);
    }
}
