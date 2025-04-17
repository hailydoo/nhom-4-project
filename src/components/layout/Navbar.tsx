
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentUser } from "@/data/mockData";

export function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">LessonLane</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">
                Courses
              </Link>
              <Link to="/my-learning" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">
                My Learning
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <Button variant="outline" className="mr-4">
              Search
            </Button>
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="" alt={currentUser.full_name} />
                <AvatarFallback>{currentUser.full_name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
