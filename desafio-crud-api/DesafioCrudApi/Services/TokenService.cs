using DesafioCrudApi.Configurations;
using DesafioCrudApi.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DesafioCrudApi.Services
{
    public class TokenService
    {
        public string Generate(UserModel user)
        {
            // creates a instance of JwtSecurityTokenHandler
            var handler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(Configuration.PrivateKey);

            var credentials =  new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = GenerateClaims(user),
                SigningCredentials = credentials,
                // Expires = DateTime.UtcNow.AddMinutes(5),// validate token
            };

            // create a Token
            var token = handler.CreateToken(tokenDescriptor);

            // generates a token string
            return handler.WriteToken(token);
        }
        private static ClaimsIdentity GenerateClaims(UserModel user)
        {
            var claimsIdentity = new ClaimsIdentity();
            claimsIdentity.AddClaim(new Claim(ClaimTypes.Name, user.Email));

            foreach(var role in user.Roles)
                claimsIdentity.AddClaim(new Claim(ClaimTypes.Role, role));

            claimsIdentity.AddClaim(new Claim("test21", "pessego"));

            return claimsIdentity;
        }
    }
}
