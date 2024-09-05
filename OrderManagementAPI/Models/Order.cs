namespace OrderManagementAPI.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string SenderCity { get; set; }
        public string SenderAddress { get; set; }
        public string ReceiverCity { get; set; }
        public string ReceiverAddress { get; set; }
        public decimal CargoWeight { get; set; }
        public DateTime PickupDate { get; set; }
        public string OrderNumber { get; set; }
    }
}
