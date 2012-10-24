namespace Web.Model
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }    
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public decimal Cost { get; set; }
        public int Quantity { get; set; }
    }
}