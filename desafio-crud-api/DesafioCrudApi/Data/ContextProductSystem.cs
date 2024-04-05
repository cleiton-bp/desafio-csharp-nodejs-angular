using DesafioCrudApi.Data.Map;
using DesafioCrudApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DesafioCrudApi.Data
{
    public class ContextProductSystem : DbContext
    {
        public ContextProductSystem(DbContextOptions<ContextProductSystem> options) : base(options)
        {
        }
        public DbSet<ProductModel> Products { get; set;}
        public DbSet<CategoryModel> Categories { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductMap());
            modelBuilder.ApplyConfiguration(new CategoryMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}
