
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  getCourseById, 
  getChaptersByCourseId,
  getLessonsByChapterId,
  getLessonById,
  getPagesByLessonId
} from "@/data/mockData";
import { LearningNav } from "@/components/learning/LearningNav";
import { PageContent } from "@/components/learning/PageContent";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Menu, X } from "lucide-react";
import { Chapter, Lesson, Page as PageType } from "@/types";

const LearningPage = () => {
  const { courseId, lessonId } = useParams<{ courseId: string, lessonId: string }>();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState(getCourseById(Number(courseId)));
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>();
  const [pages, setPages] = useState<PageType[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [navVisible, setNavVisible] = useState(true);
  
  useEffect(() => {
    if (!course) {
      navigate("/courses");
      return;
    }
    
    // Get chapters
    const courseChapters = getChaptersByCourseId(course.id);
    setChapters(courseChapters);
    
    // Get all lessons
    let lessons: Lesson[] = [];
    courseChapters.forEach(chapter => {
      const chapterLessons = getLessonsByChapterId(chapter.id);
      lessons = [...lessons, ...chapterLessons];
    });
    setAllLessons(lessons);
    
    // Find the current lesson
    const lesson = getLessonById(Number(lessonId));
    if (!lesson) {
      // Redirect to first lesson if not found
      if (lessons.length > 0) {
        navigate(`/learning/${courseId}/lessons/${lessons[0].id}`);
      } else {
        navigate(`/courses/${courseId}`);
      }
      return;
    }
    
    setCurrentLesson(lesson);
    
    // Get pages for current lesson
    const lessonPages = getPagesByLessonId(lesson.id);
    setPages(lessonPages);
    setCurrentPageIndex(0); // Start at first page
    
  }, [course, courseId, lessonId, navigate]);
  
  const handleSelectLesson = (lessonId: number) => {
    navigate(`/learning/${courseId}/lessons/${lessonId}`);
  };
  
  const handleNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      // Last page of lesson, mark as completed if not already
      if (currentLesson && !completedLessons.includes(currentLesson.id)) {
        setCompletedLessons([...completedLessons, currentLesson.id]);
      }
      
      // Find next lesson
      if (currentLesson && allLessons.length > 0) {
        const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
        if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
          // Navigate to next lesson
          const nextLesson = allLessons[currentIndex + 1];
          navigate(`/learning/${courseId}/lessons/${nextLesson.id}`);
        }
      }
    }
  };
  
  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    } else {
      // First page of lesson, go to previous lesson if available
      if (currentLesson && allLessons.length > 0) {
        const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
        if (currentIndex > 0) {
          // Navigate to previous lesson
          const prevLesson = allLessons[currentIndex - 1];
          const prevLessonPages = getPagesByLessonId(prevLesson.id);
          navigate(`/learning/${courseId}/lessons/${prevLesson.id}`);
          // Set to last page of previous lesson
          setCurrentPageIndex(prevLessonPages.length - 1);
        }
      }
    }
  };
  
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  
  if (!course || !currentLesson || pages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-lg">Loading content...</p>
        </div>
      </div>
    );
  }
  
  const currentPage = pages[currentPageIndex];
  
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleNav} className="mr-2 md:hidden">
            {navVisible ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" asChild>
            <a href={`/courses/${courseId}`}>
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Course
            </a>
          </Button>
        </div>
        <div className="text-center flex-1">
          <h1 className="text-lg font-medium truncate mx-4">{currentLesson.title}</h1>
        </div>
        <div className="w-24"></div> {/* Spacer to center title */}
      </header>
      
      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${navVisible ? 'block' : 'hidden'} md:block w-80 flex-shrink-0`}>
          <LearningNav
            chapters={chapters}
            lessons={allLessons}
            currentLessonId={currentLesson.id}
            onSelectLesson={handleSelectLesson}
            completedLessons={completedLessons}
          />
        </div>
        
        {/* Content area */}
        <div className="flex-grow overflow-auto bg-white">
          <PageContent
            page={currentPage}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            hasNextPage={currentPageIndex < pages.length - 1 || allLessons.findIndex(l => l.id === currentLesson.id) < allLessons.length - 1}
            hasPrevPage={currentPageIndex > 0 || allLessons.findIndex(l => l.id === currentLesson.id) > 0}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
