namespace OrderManagementAPI.Services
{
    public class OrderNumberGenerator
    {
        private static Random random = new Random();

        public static string GenerateOrderNumber(DateTime date)
        {
            string datePart = date.ToString("yyyyMMdd");
            int randomPart = random.Next(1000, 9999); // Генерация случайного числа от 1000 до 9999
            return $"ORD-{datePart}-{randomPart}";
        }
    }
}
