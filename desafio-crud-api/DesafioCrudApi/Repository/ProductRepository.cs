using DesafioCrudApi.Data;
using DesafioCrudApi.Models;
using DesafioCrudApi.Repository.interfaces;
using Microsoft.EntityFrameworkCore;

namespace DesafioCrudApi.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly ContextProductSystem _dbContext;
        public ProductRepository(ContextProductSystem contextProductSystem)
        {
            _dbContext = contextProductSystem;
        }
        public async Task<ProductModel> GetProductById(int id)
        {
            return await _dbContext.Products.FirstOrDefaultAsync(p => p.Id == id);
        }
        public async Task<List<ProductModel>> GetAllProducts()
        {
            return await _dbContext.Products.ToListAsync();
        }
        public async Task<ProductModel> CreateProduct(ProductModel product)
        {
            await _dbContext.Products.AddAsync(product);   
            await _dbContext.SaveChangesAsync();

            return product;
        }    
        public async Task<ProductModel> UpdateProduct(ProductModel product, int id)
        {
            ProductModel productById = await GetProductById(id);

            if(productById == null)
            {
                throw new Exception($"Produto Com ID: ${id} Não Encontrado");
            }

            productById.Name = product.Name;
            productById.Description = product.Description;
            productById.Price = product.Price;
            productById.CategoryId = product.CategoryId;

            _dbContext.Update(productById);
            await _dbContext.SaveChangesAsync();

            return productById;
        }
        public async Task<bool> DeleteProduct(int id)
        {
            ProductModel productById = await GetProductById(id);

            if (productById == null)
            {
                throw new Exception($"Produto Com ID: ${id} Não Encontrado");
            }

            _dbContext.Remove(productById);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
