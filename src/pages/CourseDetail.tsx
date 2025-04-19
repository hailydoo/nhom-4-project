import { useParams, Link, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { getCourseById, getChaptersByCourseId, getLessonsByChapterId, enrollments, currentUser } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, BookOpen, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Chapter, Lesson } from "@/types";
import { courseApi, Course } from '@/lib/api/courses';
import { toast } from 'sonner';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentProgress, setEnrollmentProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        if (!id) return;
        const data = await courseApi.getCourseById(parseInt(id));
        setCourse(data);
        setChapters(data.chapters || []);
        setAllLessons(data.chapters?.map(chapter => chapter.lessons) || []);
        setIsEnrolled(!!data.enrollment);
        setEnrollmentProgress(data.enrollment?.progress_percent || 0);
      } catch (error: any) {
        toast.error(error.message || 'Không thể tải thông tin khóa học');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = () => {
    // In a real app, this would be an API call
    setIsEnrolled(true);
    setEnrollmentProgress(0);
  };

  const handleStartLearning = () => {
    if (allLessons.length > 0) {
      navigate(`/learning/${id}/lessons/${allLessons[0].id}`);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4" />
            <div className="aspect-video bg-gray-200 rounded-lg mb-6" />
            <div className="h-4 bg-gray-200 rounded mb-2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!course) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            Không tìm thấy khóa học
          </div>
        </div>
      </MainLayout>
    );
  }

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
                                    <Link to={`/learning/${id}/lessons/${lesson.id}`}>
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
