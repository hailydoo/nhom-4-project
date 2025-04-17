
import { MainLayout } from "@/components/layout/MainLayout";
import { courses, enrollments } from "@/data/mockData";
import { CourseGrid } from "@/components/course/CourseGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Get featured courses (first 4)
  const featuredCourses = courses.slice(0, 4);

  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock your potential with LessonLane</h1>
            <p className="text-xl mb-8">Learn in-demand skills with our comprehensive online courses.</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured courses section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-blue-600 hover:underline">
              View all courses
            </Link>
          </div>
          <CourseGrid courses={featuredCourses} enrollments={enrollments} />
        </div>
      </section>

      {/* Categories section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">Master modern web development techniques</p>
              <Link to="/courses" className="text-blue-600 hover:underline">
                Explore →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Data Science</h3>
              <p className="text-gray-600 mb-4">Learn to analyze and visualize data</p>
              <Link to="/courses" className="text-blue-600 hover:underline">
                Explore →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-600 mb-4">Build apps for iOS and Android</p>
              <Link to="/courses" className="text-blue-600 hover:underline">
                Explore →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Programming</h3>
              <p className="text-gray-600 mb-4">Master popular programming languages</p>
              <Link to="/courses" className="text-blue-600 hover:underline">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning on LessonLane. 
            Unlock your potential today!
          </p>
          <Button asChild size="lg">
            <Link to="/courses">Get Started</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
