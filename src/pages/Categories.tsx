

const Categories = () => {
    return (
        <div className="container-custom py-20">
            <h1 className="text-4xl font-bold mb-8">Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Medicines', 'Personal Care', 'Baby Care', 'Nutrition', 'Devices', 'Ayurveda', 'Homeopathy', 'Fitness'].map((cat) => (
                    <div key={cat} className="bg-white p-8 rounded-xl shadow-sm text-center border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
                        <h3 className="font-semibold text-lg">{cat}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
