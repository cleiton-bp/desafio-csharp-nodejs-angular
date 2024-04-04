
namespace DesafioCrudApi.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }

        public static implicit operator bool(ProductModel v)
        {
            throw new NotImplementedException();
        }
    }
}