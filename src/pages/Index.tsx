import { MainLayout } from "@/components/layout/MainLayout";
import { courses, enrollments } from "@/data/mockData";
import { CourseGrid } from "@/components/course/CourseGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredCourses = courses.slice(0, 4);

  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Khám phá tiềm năng của bạn với LessonLane</h1>
            <p className="text-xl mb-8">Học các kỹ năng được yêu cầu cao với các khóa học trực tuyến toàn diện của chúng tôi.</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/courses">Xem Khóa học</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured courses section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Khóa học Nổi bật</h2>
            <Link to="/courses" className="text-blue-600 hover:underline">
              Xem tất cả khóa học
            </Link>
          </div>
          <CourseGrid courses={featuredCourses} enrollments={enrollments} />
        </div>
      </section>

      {/* Categories section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Khám phá Danh mục</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Lập trình Web</h3>
              <p className="text-gray-600 mb-4">Làm chủ kỹ thuật phát triển web hiện đại</p>
              <Link to="/courses" className="text-blue-600 hover:underline">
                Khám phá →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Khoa học Dữ liệu</h3>
              <p className="text-gray-600 mb-4">Học phân tích và trực quan hóa dữ liệu</p>
              <Link to="/courses" className="text-blue-600 hover:underline">
                Khám phá →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Phát triển Ứng dụng Di động</h3>
              <p className="text-gray-600 mb-4">Xây dựng ứng dụng cho iOS và Android</p>
              <Link to="/courses" className="text-blue-600 hover:underline">
                Khám phá →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Lập trình</h3>
              <p className="text-gray-600 mb-4">Làm chủ các ngôn ngữ lập trình phổ biến</p>
              <Link to="/courses" className="text-blue-600 hover:underline">
                Khám phá →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu học?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn học viên đang học tập trên LessonLane. 
            Khám phá tiềm năng của bạn ngay hôm nay!
          </p>
          <Button asChild size="lg">
            <Link to="/courses">Bắt đầu Ngay</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
