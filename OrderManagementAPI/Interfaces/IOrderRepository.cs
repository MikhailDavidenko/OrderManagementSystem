using OrderManagementAPI.Models;

namespace OrderManagementAPI.Interfaces
{
    public interface IOrderRepository
    {
        Task<Order> GetByNumberAsync(string orderNumber);
        Task<IEnumerable<Order>> GetAllAsync();
        Task AddAsync(Order order);
    }
}
