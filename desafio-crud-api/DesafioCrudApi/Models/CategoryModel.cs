namespace DesafioCrudApi.Models
{
    public class CategoryModel
    {
        public int Id { get; set; }
        
        public string? Name { get; set; }

        public int? ProductId { get; set; }

        public virtual ProductModel? Product { get; set; }  
    }
}
