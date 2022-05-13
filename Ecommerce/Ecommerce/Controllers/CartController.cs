using Ecommerce.Models;
using Ecommerce.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Ecommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
  //  [Authorize]
    public class CartController : ControllerBase
    {
        ICartRepository CartRepository;

        public CartController(ICartRepository cart)
        {
            CartRepository = cart;

        }
        [HttpGet]
        public IActionResult getAll()
        {
            List<Cart> CartList = CartRepository.GetAll();
            if (CartList == null)
            {
                return BadRequest("Empty Carts");
            }
            return Ok(CartList);
        }
        [HttpGet("{id:int}")]

        public IActionResult getByID(int id)
        {
            Cart CartList = CartRepository.GetById(id);
            if (CartList == null)
            {
                return BadRequest("there is no Cart with this id");
            }
            return Ok(CartList);
        }

        [HttpPost]
        public IActionResult Insert(Cart Cart)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    CartRepository.Insert(Cart);
                    return Ok("Add to Cart  Successfully");
                }
                catch
                {
                    return StatusCode(StatusCodes.Status400BadRequest, "Can't add to Cart");
                }
            }
            return BadRequest(ModelState);
        }
        [HttpPut("{id:int}")]
        public IActionResult Edit(int id, Cart Cart)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    CartRepository.Update(id, Cart);

                    return StatusCode(StatusCodes.Status204NoContent, "Data Saved");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return BadRequest(ModelState);
        }
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            try
            {
                CartRepository.Delete(id);
                return Ok("Cart Deleted");
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Can't Delete this Cart item");
            }


        }
       
    }
}
