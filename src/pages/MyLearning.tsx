
import { MainLayout } from "@/components/layout/MainLayout";
import { enrollments, courses, getCourseById } from "@/data/mockData";
import { CourseGrid } from "@/components/course/CourseGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const MyLearning = () => {
  const [activeTab, setActiveTab] = useState("in-progress");

  // Get enrolled courses from mock data
  const enrolledCourses = enrollments.map(enrollment => {
    const course = getCourseById(enrollment.course_id);
    return { enrollment, course: course! };
  });

  // Filter courses based on tab
  const inProgressCourses = enrolledCourses
    .filter(({ enrollment }) => enrollment.status === 'enrolled' && enrollment.progress_percent < 100)
    .map(({ course }) => course);

  const completedCourses = enrolledCourses
    .filter(({ enrollment }) => enrollment.status === 'completed' || enrollment.progress_percent === 100)
    .map(({ course }) => course);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Learning</h1>
        
        <Tabs defaultValue="in-progress" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="in-progress">
            {inProgressCourses.length > 0 ? (
              <CourseGrid courses={inProgressCourses} enrollments={enrollments} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No courses in progress</h3>
                <p className="text-gray-500 mb-6">Start learning by enrolling in a course</p>
                <a href="/courses" className="text-blue-600 hover:underline">Browse Courses</a>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed">
            {completedCourses.length > 0 ? (
              <CourseGrid courses={completedCourses} enrollments={enrollments} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No completed courses yet</h3>
                <p className="text-gray-500 mb-6">Finish your enrolled courses to see them here</p>
                <a href="/courses" className="text-blue-600 hover:underline">Browse Courses</a>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default MyLearning;
