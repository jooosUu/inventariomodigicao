import React from 'react';
import { BarcodeScanner } from './components/BarcodeScanner';
import { ProductList } from './components/ProductList';
import { Dashboard } from './components/Dashboard';
import { Package } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Sistema de Inventario
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6">
            <BarcodeScanner />
            <Dashboard />
            <ProductList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;