

const Products = () => {
    return (
        <div className="container-custom py-20">
            <h1 className="text-4xl font-bold mb-8">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm h-64 flex items-center justify-center border border-slate-100">
                        <span className="text-slate-400">Product {i} Placeholder</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
