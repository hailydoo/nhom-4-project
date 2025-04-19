
import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-blue-600">5 ANH EM</h3>
              <p className="text-gray-600 text-sm">© 2025 5 ANH EM. Bản quyền đã được bảo hộ.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Điều khoản</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Quyền riêng tư</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Trợ giúp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
