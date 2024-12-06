import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed">
      <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
      <ul>
        <li>
          <Link
            href="/admin/products"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            All Products
          </Link>
        </li>
        <li>
          <Link
            href="/admin/add-product"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Add Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
