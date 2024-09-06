using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderManagementAPI.Interfaces;
using OrderManagementAPI.Models;
using OrderManagementAPI.Repositories;
using OrderManagementAPI.Services;

namespace OrderManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet("{number}")]
        public async Task<IActionResult> GetOrder(string number)
        {
            var order = await _orderRepository.GetByNumberAsync(number);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            var orders = await _orderRepository.GetAllAsync();

            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            order.OrderNumber = OrderNumberGenerator.GenerateOrderNumber(order.PickupDate);
            order.PickupDate = DateTime.SpecifyKind(order.PickupDate, DateTimeKind.Utc);

            await _orderRepository.AddAsync(order);

            return CreatedAtAction(nameof(GetOrder), new { number = order.OrderNumber }, order);
        }

    }
}
