
import { Course } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: Course;
  enrollmentProgress?: number;
}

export function CourseCard({ course, enrollmentProgress }: CourseCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
        {course.status !== 'active' && (
          <Badge variant="secondary" className="absolute top-2 right-2">
            {course.status === 'maintenance' ? 'Under Maintenance' : 'Inactive'}
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold leading-tight">
          <Link to={`/courses/${course.id}`} className="hover:text-blue-600">
            {course.title}
          </Link>
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        {enrollmentProgress !== undefined ? (
          <div className="w-full">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-500">Progress</span>
              <span className="text-xs font-medium">{enrollmentProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-blue-600 h-1.5 rounded-full" 
                style={{ width: `${enrollmentProgress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <Button asChild>
            <Link to={`/courses/${course.id}`}>View Course</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
