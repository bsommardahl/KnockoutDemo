using System.Collections.Generic;

namespace Web.Model
{
    public static class ProductRepository
    {
        static readonly List<Product> Products = new List<Product>
                                                     {
                                                         new Product
                                                             {
                                                                 Id = 1,
                                                                 Name = "Coca Cola",
                                                                 Price = 15,
                                                                 Cost = 12,
                                                                 ImageUrl = "Content/Images/coke_can.jpg",
                                                                 Quantity = 20,
                                                             },
                                                         new Product
                                                             {
                                                                 Id = 2,
                                                                 Name = "Sprite",
                                                                 Price = 15,
                                                                 Cost = 12,
                                                                 ImageUrl = "Content/Images/sprite_12oz.jpg",
                                                                 Quantity = 20,
                                                             },
                                                         new Product
                                                             {
                                                                 Id = 3,
                                                                 Name = "Mr Pibb Xtra",
                                                                 Price = 18,
                                                                 Cost = 14,
                                                                 ImageUrl = "Content/Images/pibbxtra_120z.jpg",
                                                                 Quantity = 20,
                                                             },
                                                         new Product
                                                             {
                                                                 Id = 4,
                                                                 Name = "Fanta Orange",
                                                                 Price = 15,
                                                                 Cost = 12,
                                                                 ImageUrl = "Content/Images/fanta_orange_12oz.jpg",
                                                                 Quantity = 20,
                                                             },
                                                         new Product
                                                             {
                                                                 Id = 5,
                                                                 Name = "Dasani Water",
                                                                 Price = 15,
                                                                 Cost = 12,
                                                                 ImageUrl = "Content/Images/Dasani12oz.jpg",
                                                                 Quantity = 20,
                                                             },
                                                         new Product
                                                             {
                                                                 Id = 6,
                                                                 Name = "Coke Zero",
                                                                 Price = 15,
                                                                 Cost = 12,
                                                                 ImageUrl = "Content/Images/Coke-Zero-Can1.jpg",
                                                                 Quantity = 20,
                                                             },
                                                         //new Product
                                                         //    {
                                                         //        Id = 7,
                                                         //        Name = "Diet Coke",
                                                         //        Price = 15,
                                                         //        Cost = 12,
                                                         //        ImageUrl = "Content/Images/cfdiet_coke_can.jpg",
                                                         //        Quantity = 20,
                                                         //    },
                                                         //new Product
                                                         //    {
                                                         //        Id = 8,
                                                         //        Name = "Barq's Root Beer",
                                                         //        Price = 15,
                                                         //        Cost = 12,
                                                         //        ImageUrl = "Content/Images/barqs12oz.jpg",
                                                         //        Quantity = 20,
                                                         //    },
                                                     };

        public static List<Product> GetAll()
        {
            return Products;
        }
    }
}