using Ecommerce.Models;
using System.Collections.Generic;
using System.Linq;

namespace Ecommerce.Repository
{
    public class AdminReposatory : IAdmin
    {
        Context context;
        public AdminReposatory(Context _context)
        {
            context = _context;
        }

        public int Delete(int id)
        {
            var DeletedAdmin = GetById(id);
           context.Admin.Remove(DeletedAdmin);
            return context.SaveChanges();
        }

        public List<Admin> GetAll()
        {
            return context.Admin.ToList();
        }

        public Admin GetById(int id)
        {
            return context.Admin.FirstOrDefault(a=>a.Id==id);
        }

        public int Insert(Admin newAdmin)
        {
            context.Admin.Add(newAdmin);
            return context.SaveChanges();
        }

        public int Update(int id, Admin admin)
        {
            if (admin != null)
            {
                var UpdateddAdmin = GetById(id);
                UpdateddAdmin = admin;
                context.SaveChanges();
            }
            return 0;
        }

       
    }
}
