using DesafioCrudApi.Models;

namespace DesafioCrudApi.Repository.interfaces
{
    public interface ICategoryRepository
    {
        Task<List<CategoryModel>> GetAllCategories();
        Task<CategoryModel> GetCategoryById(int id);
        Task<CategoryModel> CreateCategory(CategoryModel category);
        Task<CategoryModel> UpdateCategory(CategoryModel category, int id);
        Task<bool> DeleteCategory(int id);
    }
}