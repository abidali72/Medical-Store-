import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    image: string;
    featured: boolean;
}

interface Category {
    id: number;
    name: string;
    icon: string;
    productCount: number;
}

interface Message {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
    read: boolean;
}

interface Settings {
    whatsappNumber: string;
    phone: string;
    email: string;
    address: string;
    workingHours: string;
    facebook: string;
    twitter: string;
    instagram: string;
}

interface AdminContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
    products: Product[];
    categories: Category[];
    messages: Message[];
    settings: Settings;
    addProduct: (product: Omit<Product, 'id'>) => void;
    updateProduct: (id: number, product: Partial<Product>) => void;
    deleteProduct: (id: number) => void;
    addCategory: (category: Omit<Category, 'id' | 'productCount'>) => void;
    updateCategory: (id: number, category: Partial<Category>) => void;
    deleteCategory: (id: number) => void;
    markMessageAsRead: (id: number) => void;
    deleteMessage: (id: number) => void;
    updateSettings: (settings: Partial<Settings>) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const INITIAL_PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Paracetamol 500mg',
        description: 'Pain relief and fever reducer',
        price: 5.99,
        category: 'Medicines',
        stock: 150,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500',
        featured: true
    },
    {
        id: 2,
        name: 'Vitamin D3 Supplement',
        description: 'Essential vitamin for bone health',
        price: 12.99,
        category: 'Vitamins',
        stock: 80,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500',
        featured: true
    },
    {
        id: 3,
        name: 'First Aid Kit',
        description: 'Complete emergency medical kit',
        price: 24.99,
        category: 'Devices',
        stock: 45,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500',
        featured: false
    },
    {
        id: 4,
        name: 'Baby Care Bundle',
        description: 'Essential baby care products',
        price: 34.99,
        category: 'Baby Care',
        stock: 60,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500',
        featured: true
    }
];

const INITIAL_CATEGORIES: Category[] = [
    { id: 1, name: 'Medicines', icon: 'Pill', productCount: 45 },
    { id: 2, name: 'Baby Care', icon: 'Baby', productCount: 23 },
    { id: 3, name: 'Vitamins', icon: 'Vitamin', productCount: 18 },
    { id: 4, name: 'Personal Care', icon: 'User', productCount: 32 },
    { id: 5, name: 'Devices', icon: 'Stethoscope', productCount: 15 },
    { id: 6, name: 'Ayurveda', icon: 'Leaf', productCount: 27 }
];

const INITIAL_SETTINGS: Settings = {
    whatsappNumber: '1234567890',
    phone: '+1 (234) 567-8900',
    email: 'support@darmanmedical.com',
    address: '123 Health Street, Medical District, City, Country 12345',
    workingHours: 'Mon - Sat: 9:00 AM - 9:00 PM',
    facebook: 'https://facebook.com/darmanmedical',
    twitter: 'https://twitter.com/darmanmedical',
    instagram: 'https://instagram.com/darmanmedical'
};

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [settings, setSettings] = useState<Settings>(INITIAL_SETTINGS);

    // Load data from localStorage on mount
    useEffect(() => {
        const auth = localStorage.getItem('adminAuth');
        setIsAuthenticated(auth === 'true');

        const savedProducts = localStorage.getItem('products');
        setProducts(savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS);

        const savedCategories = localStorage.getItem('categories');
        setCategories(savedCategories ? JSON.parse(savedCategories) : INITIAL_CATEGORIES);

        const savedMessages = localStorage.getItem('messages');
        setMessages(savedMessages ? JSON.parse(savedMessages) : []);

        const savedSettings = localStorage.getItem('settings');
        setSettings(savedSettings ? JSON.parse(savedSettings) : INITIAL_SETTINGS);
    }, []);

    const login = (username: string, password: string) => {
        if (username === 'admin' && password === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('adminAuth', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('adminAuth');
    };

    const addProduct = (product: Omit<Product, 'id'>) => {
        const newProduct = { ...product, id: Date.now() };
        const updated = [...products, newProduct];
        setProducts(updated);
        localStorage.setItem('products', JSON.stringify(updated));
    };

    const updateProduct = (id: number, product: Partial<Product>) => {
        const updated = products.map(p => p.id === id ? { ...p, ...product } : p);
        setProducts(updated);
        localStorage.setItem('products', JSON.stringify(updated));
    };

    const deleteProduct = (id: number) => {
        const updated = products.filter(p => p.id !== id);
        setProducts(updated);
        localStorage.setItem('products', JSON.stringify(updated));
    };

    const addCategory = (category: Omit<Category, 'id' | 'productCount'>) => {
        const newCategory = { ...category, id: Date.now(), productCount: 0 };
        const updated = [...categories, newCategory];
        setCategories(updated);
        localStorage.setItem('categories', JSON.stringify(updated));
    };

    const updateCategory = (id: number, category: Partial<Category>) => {
        const updated = categories.map(c => c.id === id ? { ...c, ...category } : c);
        setCategories(updated);
        localStorage.setItem('categories', JSON.stringify(updated));
    };

    const deleteCategory = (id: number) => {
        const updated = categories.filter(c => c.id !== id);
        setCategories(updated);
        localStorage.setItem('categories', JSON.stringify(updated));
    };

    const markMessageAsRead = (id: number) => {
        const updated = messages.map(m => m.id === id ? { ...m, read: true } : m);
        setMessages(updated);
        localStorage.setItem('messages', JSON.stringify(updated));
    };

    const deleteMessage = (id: number) => {
        const updated = messages.filter(m => m.id !== id);
        setMessages(updated);
        localStorage.setItem('messages', JSON.stringify(updated));
    };

    const updateSettings = (newSettings: Partial<Settings>) => {
        const updated = { ...settings, ...newSettings };
        setSettings(updated);
        localStorage.setItem('settings', JSON.stringify(updated));
    };

    return (
        <AdminContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                products,
                categories,
                messages,
                settings,
                addProduct,
                updateProduct,
                deleteProduct,
                addCategory,
                updateCategory,
                deleteCategory,
                markMessageAsRead,
                deleteMessage,
                updateSettings
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin must be used within AdminProvider');
    }
    return context;
};
