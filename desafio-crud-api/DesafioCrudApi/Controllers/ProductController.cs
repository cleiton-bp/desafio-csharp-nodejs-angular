﻿using DesafioCrudApi.Models;
using DesafioCrudApi.Repository.interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DesafioCrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public async  Task<ActionResult<List<ProductModel>>> GetAllProducts()
        {
            List<ProductModel> products =  await _productRepository.GetAllProducts();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductModel>> GetProductById(int id)
        {
            ProductModel product = await _productRepository.GetProductById(id);
            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult<ProductModel>> CreateProduct([FromBody] ProductModel productModel)
        {
            ProductModel product = await _productRepository.CreateProduct(productModel);
            return Ok(product);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ProductModel>> UpdateProduct([FromBody] ProductModel productModel, int id)
        {
            productModel.Id = id;
            ProductModel product = await _productRepository.UpdateProduct(productModel,id);
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductModel>> DeleteProduct(int id)
        {
            bool productDeleted = await _productRepository.DeleteProduct(id);

            return Ok("Produto deletado com sucesso");
        }
    }
}