using DesafioCrudApi.Data;
using DesafioCrudApi.Models;
using DesafioCrudApi.Repository.interfaces;
using Microsoft.EntityFrameworkCore;

namespace DesafioCrudApi.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ContextProductSystem _dbContext;
        public CategoryRepository(ContextProductSystem contextProductSystem)
        {
            _dbContext = contextProductSystem;
        }

        public async Task<CategoryModel> GetCategoryById(int id)
        {
            return await _dbContext.Categories
                .Include(x => x.Id == id)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<List<CategoryModel>> GetAllCategories()
        {
            return await _dbContext.Categories
                .Include(x => x.Product)
                .ToListAsync();
        }
 
        public async Task<CategoryModel> CreateCategory(CategoryModel category)
        {
            await _dbContext.Categories.AddAsync(category);   
            await _dbContext.SaveChangesAsync();

            return category;
        }
        
        public async Task<CategoryModel> UpdateCategory(CategoryModel category, int id)
        {
            CategoryModel categoryById = await GetCategoryById(id);

            if(categoryById == null)
            {
                throw new Exception($"Categoria Com ID: ${id} Não Encontrado");
            }

            categoryById.Name = category.Name;
            categoryById.ProductId = category.ProductId;

            _dbContext.Categories.Update(categoryById);
            await _dbContext.SaveChangesAsync();

            return categoryById;
        }

        public async Task<bool> DeleteCategory(int id)
        {
            CategoryModel categorytById = await GetCategoryById(id);

            if (categorytById == null)
            {
                throw new Exception($"Categoria Com ID: ${id} Não Encontrado");
            }

            _dbContext.Categories.Remove(categorytById);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
