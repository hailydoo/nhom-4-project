
import { Chapter, Lesson } from "@/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface LearningNavProps {
  chapters: Chapter[];
  lessons: Lesson[];
  currentLessonId: number;
  onSelectLesson: (lessonId: number) => void;
  completedLessons?: number[];
}

export function LearningNav({ 
  chapters, 
  lessons, 
  currentLessonId,
  onSelectLesson,
  completedLessons = []
}: LearningNavProps) {
  return (
    <div className="bg-gray-50 border-r h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Course Content</h2>
      </div>
      <Accordion type="multiple" defaultValue={chapters.map(c => c.id.toString())}>
        {chapters.map((chapter) => {
          const chapterLessons = lessons.filter(lesson => lesson.chapter_id === chapter.id);
          
          return (
            <AccordionItem key={chapter.id} value={chapter.id.toString()}>
              <AccordionTrigger className="px-4 py-2 hover:bg-gray-100">
                <div className="text-left">
                  <span className="font-medium">{chapter.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="py-1">
                  {chapterLessons.map((lesson) => {
                    const isActive = lesson.id === currentLessonId;
                    const isCompleted = completedLessons.includes(lesson.id);
                    
                    return (
                      <li key={lesson.id}>
                        <button
                          onClick={() => onSelectLesson(lesson.id)}
                          className={cn(
                            "flex items-center w-full px-6 py-2 text-left text-sm transition-colors",
                            isActive ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100",
                            isCompleted ? "text-green-600" : ""
                          )}
                        >
                          <span className="flex-1">{lesson.title}</span>
                          {isCompleted && <CheckCircle2 className="ml-2 h-4 w-4" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
