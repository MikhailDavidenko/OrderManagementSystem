﻿using Microsoft.EntityFrameworkCore;
using OrderManagementAPI.Interfaces;
using OrderManagementAPI.Models;

namespace OrderManagementAPI.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext _context;

        public OrderRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Order> GetByNumberAsync(string orderNumber)
        {
            return await _context.Orders.FirstOrDefaultAsync(p=>p.OrderNumber == orderNumber);
        }

        public async Task<IEnumerable<Order>> GetAllAsync()
        {
            return await _context.Orders.ToListAsync();
        }

        public async Task AddAsync(Order order)
        {
            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();
        }
    }
}
