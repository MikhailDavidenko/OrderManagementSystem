using System.ComponentModel.DataAnnotations;

namespace OrderManagementAPI.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        [Required(ErrorMessage = "Город отправителя обязателен.")]
        public string SenderCity { get; set; }

        [Required(ErrorMessage = "Адрес отправителя обязателен.")]
        public string SenderAddress { get; set; }

        [Required(ErrorMessage = "Город получателя обязателен.")]
        public string ReceiverCity { get; set; }

        [Required(ErrorMessage = "Адрес получателя обязателен.")]
        public string ReceiverAddress { get; set; }

        [Range(0.1, double.MaxValue, ErrorMessage = "Вес груза должен быть больше 0.")]
        public decimal CargoWeight { get; set; }

        
        [Required(ErrorMessage = "Дата забора обязательна.")]
        public DateTime PickupDate { get; set; }

        public string OrderNumber { get; set; } 
    }
}
