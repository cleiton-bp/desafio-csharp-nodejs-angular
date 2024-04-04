using DesafioCrudApi.Models;
using DesafioCrudApi.Repository.interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DesafioCrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository ategoryRepository)
        {
            _categoryRepository = ategoryRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductModel>>> GetAllCategories()
        {
            List<CategoryModel> categories = await _categoryRepository.GetAllCategories();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryModel>> GetCategoryById(int id)
        {
            CategoryModel category= await _categoryRepository.GetCategoryById(id);
            return Ok(category);
        }

        [HttpPost]
        public async Task<ActionResult<CategoryModel>> CreateCategory([FromBody] CategoryModel categoryModel)
        {
            CategoryModel category = await _categoryRepository.CreateCategory(categoryModel);
            return Ok(category);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CategoryModel>> UpdateCategory([FromBody] CategoryModel categoryModel, int id)
        {
            categoryModel.Id = id;
            CategoryModel category= await _categoryRepository.UpdateCategory(categoryModel,id);
            return Ok(category);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CategoryModel>> DeleteCategory(int id)
        {
            bool categoryDeleted = await _categoryRepository.DeleteCategory(id);
            return Ok(categoryDeleted);
        }
    }
}
