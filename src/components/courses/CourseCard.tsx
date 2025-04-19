import { Course } from '@/lib/api/courses';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3 mb-4">
          {course.description}
        </p>
        <div className="mt-auto">
          <Button asChild className="w-full">
            <Link to={`/courses/${course.id}`}>
              Xem chi tiết
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 