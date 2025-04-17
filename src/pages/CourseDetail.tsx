
import { useParams, Link, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { getCourseById, getChaptersByCourseId, getLessonsByChapterId, enrollments, currentUser } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, BookOpen, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Chapter, Lesson } from "@/types";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState(getCourseById(Number(courseId)));
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentProgress, setEnrollmentProgress] = useState(0);

  useEffect(() => {
    if (!course) {
      // Course not found, redirect to courses page
      navigate("/courses");
      return;
    }

    // Get chapters for this course
    const courseChapters = getChaptersByCourseId(course.id);
    setChapters(courseChapters);

    // Get all lessons for this course
    const lessons: Lesson[] = [];
    courseChapters.forEach(chapter => {
      const chapterLessons = getLessonsByChapterId(chapter.id);
      lessons.push(...chapterLessons);
    });
    setAllLessons(lessons);

    // Check if user is enrolled
    const enrollment = enrollments.find(
      e => e.course_id === course.id && e.user_id === currentUser.id
    );
    
    setIsEnrolled(!!enrollment);
    setEnrollmentProgress(enrollment?.progress_percent || 0);
  }, [course, navigate]);

  const handleEnroll = () => {
    // In a real app, this would be an API call
    setIsEnrolled(true);
    setEnrollmentProgress(0);
  };

  const handleStartLearning = () => {
    if (allLessons.length > 0) {
      navigate(`/learning/${courseId}/lessons/${allLessons[0].id}`);
    }
  };

  if (!course) return null;

  return (
    <MainLayout>
      <div className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{allLessons.length} lessons</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Approx. {Math.ceil(allLessons.length * 0.5)} hours</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  <span>100+ enrolled</span>
                </div>
              </div>

              {isEnrolled ? (
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-full sm:w-64">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">Your progress</span>
                      <span className="text-sm font-medium">{enrollmentProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${enrollmentProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button onClick={handleStartLearning}>
                    {enrollmentProgress > 0 ? "Continue Learning" : "Start Learning"}
                  </Button>
                </div>
              ) : (
                <Button size="lg" onClick={handleEnroll}>
                  Enroll in Course
                </Button>
              )}
            </div>
            
            <div className="lg:w-1/3">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="curriculum">
          <TabsList className="mb-6">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="curriculum">
            <div className="border rounded-lg overflow-hidden">
              <Accordion type="multiple" defaultValue={chapters.map(c => c.id.toString())}>
                {chapters.map((chapter) => {
                  const chapterLessons = allLessons.filter(lesson => lesson.chapter_id === chapter.id);
                  
                  return (
                    <AccordionItem key={chapter.id} value={chapter.id.toString()}>
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                        <div className="text-left">
                          <h3 className="font-semibold">{chapter.title}</h3>
                          <p className="text-sm text-gray-500">{chapterLessons.length} lessons</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-2">
                        <ul className="divide-y">
                          {chapterLessons.map((lesson) => (
                            <li key={lesson.id} className="py-3">
                              <div className="flex justify-between items-center">
                                <span>{lesson.title}</span>
                                {isEnrolled ? (
                                  <Button variant="ghost" asChild size="sm">
                                    <Link to={`/learning/${courseId}/lessons/${lesson.id}`}>
                                      View
                                    </Link>
                                  </Button>
                                ) : (
                                  <Button variant="ghost" size="sm" disabled>
                                    Locked
                                  </Button>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </TabsContent>
          
          <TabsContent value="overview">
            <div className="prose max-w-none">
              <h2>About this course</h2>
              <p>This course provides a comprehensive introduction to the subject matter, covering all essential topics and practical applications.</p>
              
              <h3>What you'll learn</h3>
              <ul>
                <li>Comprehensive understanding of key concepts</li>
                <li>Practical skills applicable to real-world scenarios</li>
                <li>Best practices and industry standards</li>
                <li>Problem-solving techniques specific to the field</li>
              </ul>
              
              <h3>Requirements</h3>
              <ul>
                <li>Basic computer literacy</li>
                <li>Fundamental understanding of related concepts</li>
                <li>Access to required software and tools</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default CourseDetail;
