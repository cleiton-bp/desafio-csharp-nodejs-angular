using DesafioCrudApi.Models;

namespace DesafioCrudApi.Repository.interfaces
{
    public interface IProductRepository
    {
        Task<List<ProductModel>> GetAllProducts();
        Task<ProductModel> GetProductById(int id);
        Task<ProductModel> CreateProduct(ProductModel product);
        Task<ProductModel> UpdateProduct(ProductModel product, int id);
        Task<bool> DeleteProduct(int id);
    }
}
