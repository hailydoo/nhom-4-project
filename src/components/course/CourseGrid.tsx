
import { Course, Enrollment } from "@/types";
import { CourseCard } from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
  enrollments?: Enrollment[];
}

export function CourseGrid({ courses, enrollments }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course) => {
        const enrollment = enrollments?.find(e => e.course_id === course.id);
        return (
          <CourseCard 
            key={course.id} 
            course={course} 
            enrollmentProgress={enrollment?.progress_percent}
          />
        );
      })}
    </div>
  );
}
