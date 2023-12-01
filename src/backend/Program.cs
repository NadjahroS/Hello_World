using System;
using System.Security.Claims;
using System.Text.Json;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

internal class Program
{
  private static void Main(string[] args)
  {
    var builder = WebApplication.CreateBuilder(args);

    // Add services to the container.
    builder.Services.AddCors(options =>
    {
      options.AddPolicy("AllowSpecificOrigin", builder =>
  builder.WithOrigins("http://localhost:4200") // Add additional origins as needed
         .AllowAnyMethod()
         .AllowAnyHeader()
         .AllowCredentials());
    });

    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
      options.Authority = $"https://{builder.Configuration["Auth0:Domain"]}/";
      options.Audience = builder.Configuration["Auth0:Audience"];
      options.TokenValidationParameters = new TokenValidationParameters
      {
        NameClaimType = ClaimTypes.NameIdentifier
      };
    });

    // builder.Services
    //     .AddAuthorization(options =>
    //     {
    //         options.AddPolicy(
    //         "read:messages",
    //         policy => policy.Requirements.Add(
    //             new HasScopeRequirement("read:messages", domain)
    //         )
    //         );
    //     });

    builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

    // Add authorization services
    builder.Services.AddAuthorization();

    builder.Services.AddControllers();

    builder.Services.AddSwaggerGen();

    var app = builder.Build();

    // Add this line for debugging
    var serviceProvider = app.Services;
    Console.WriteLine($"CORS Configuration: {JsonSerializer.Serialize(serviceProvider.GetService<IOptions<CorsOptions>>()?.Value)}");

    // Apply CORS policy
    app.UseCors("AllowSpecificOrigin"); // Use the policy name you defined

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
      app.UseDeveloperExceptionPage();
      app.UseSwagger();
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API Name");
      });
    }
    else
    {
      app.UseHttpsRedirection();
    }

    app.UseHttpsRedirection();

    app.UseAuthorization();
    app.UseAuthentication();

    app.MapControllers();

    app.Run();
  }
}