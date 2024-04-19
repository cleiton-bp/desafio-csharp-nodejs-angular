
using DesafioCrudApi.Data;
using DesafioCrudApi.Models;
using DesafioCrudApi.Repository;
using DesafioCrudApi.Repository.interfaces;
using DesafioCrudApi.Services;
using Microsoft.EntityFrameworkCore;

namespace DesafioCrudApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var test = builder.Services.AddTransient<TokenService>();
            Console.WriteLine(test.ToString());//teste

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddEntityFrameworkNpgsql()
                .AddDbContext<ContextProductSystem>(
                    options => options.UseNpgsql(builder.Configuration.GetConnectionString("Database"))
                );


            builder.Services.AddScoped<IProductRepository, ProductRepository>();
            builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.MapGet("/login", (TokenService Services) => Services.Generate(
                new UserModel("test1@gmail.com", "123", new[] { "user", "admin" })));

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
