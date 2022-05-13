using Ecommerce.Models;
using System.Collections.Generic;

namespace Ecommerce.Repository
{
    public interface IAdmin
    {
        int Delete(int id);
        List<Admin> GetAll();
        Admin GetById(int id);
        int Insert(Admin newAdmin);
        int Update(int id, Admin admin);
    }
}
