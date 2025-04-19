import { useEffect, useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { CourseCard } from '@/components/courses/CourseCard';
import { courseApi, Course } from '@/lib/api/courses';
import { toast } from 'sonner';

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        console.log('Fetching courses...');
        const data = await courseApi.getAllCourses();
        console.log('Courses data:', data);
        setCourses(data);
        setError(null);
      } catch (error: any) {
        console.error('Error fetching courses:', error);
        setError(error.message || 'Không thể tải danh sách khóa học');
        toast.error(error.message || 'Không thể tải danh sách khóa học');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-video rounded-lg mb-4" />
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Khóa học</h1>
        {error ? (
          <div className="text-center text-red-600">
            {error}
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center text-gray-600">
            Chưa có khóa học nào.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
