namespace DesafioCrudApi.Models
{
    public record UserModel
    {
        public int Id { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string[] Roles { get; set; }

        public UserModel(string email, string password, string[] roles)
        {
            Id = Id++;
            Email = email;
            Password = password;
            Roles = roles;
        }
    }
}