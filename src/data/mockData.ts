
import { Course, Chapter, Lesson, Page, Enrollment, User } from '@/types';

// Mock Users
export const users: User[] = [
  {
    id: 1,
    full_name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    status: 'active'
  },
  {
    id: 2,
    full_name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active'
  }
];

// Mock Courses
export const courses: Course[] = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern web applications.',
    thumbnail: 'https://images.unsplash.com/photo-1561883088-039e53143d73',
    status: 'active',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  {
    id: 2,
    title: 'Python Programming Advanced Concepts',
    description: 'Master advanced Python programming with practical examples and real-world applications.',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',
    status: 'active',
    created_at: '2023-01-02T00:00:00Z',
    updated_at: '2023-01-02T00:00:00Z'
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    description: 'Get started with data analysis, visualization, and machine learning concepts.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    status: 'active',
    created_at: '2023-01-03T00:00:00Z',
    updated_at: '2023-01-03T00:00:00Z'
  },
  {
    id: 4,
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native framework.',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    status: 'active',
    created_at: '2023-01-04T00:00:00Z',
    updated_at: '2023-01-04T00:00:00Z'
  }
];

// Mock Chapters for Course ID 1
export const chapters: Chapter[] = [
  {
    id: 1,
    course_id: 1,
    title: 'Getting Started with HTML',
    chapter_order: 1,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  {
    id: 2,
    course_id: 1,
    title: 'CSS Fundamentals',
    chapter_order: 2,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  {
    id: 3,
    course_id: 1,
    title: 'JavaScript Basics',
    chapter_order: 3,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  {
    id: 4,
    course_id: 2,
    title: 'Advanced Python Functions',
    chapter_order: 1,
    created_at: '2023-01-02T00:00:00Z',
    updated_at: '2023-01-02T00:00:00Z'
  },
  {
    id: 5,
    course_id: 2,
    title: 'Object Oriented Programming in Python',
    chapter_order: 2,
    created_at: '2023-01-02T00:00:00Z',
    updated_at: '2023-01-02T00:00:00Z'
  }
];

// Mock Lessons
export const lessons: Lesson[] = [
  // HTML Lessons
  {
    id: 1,
    chapter_id: 1,
    title: 'HTML Document Structure',
    lesson_order: 1,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  {
    id: 2,
    chapter_id: 1,
    title: 'HTML Tags and Elements',
    lesson_order: 2,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  // CSS Lessons
  {
    id: 3,
    chapter_id: 2,
    title: 'CSS Selectors',
    lesson_order: 1,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  {
    id: 4,
    chapter_id: 2,
    title: 'CSS Box Model',
    lesson_order: 2,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  // JavaScript Lessons
  {
    id: 5,
    chapter_id: 3,
    title: 'JavaScript Variables',
    lesson_order: 1,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  {
    id: 6,
    chapter_id: 3,
    title: 'JavaScript Functions',
    lesson_order: 2,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  // Python Lessons
  {
    id: 7,
    chapter_id: 4,
    title: 'Lambda Functions',
    lesson_order: 1,
    created_at: '2023-01-02T00:00:00Z',
    updated_at: '2023-01-02T00:00:00Z'
  },
  {
    id: 8,
    chapter_id: 4,
    title: 'Decorators',
    lesson_order: 2,
    created_at: '2023-01-02T00:00:00Z',
    updated_at: '2023-01-02T00:00:00Z'
  }
];

// Mock Pages
export const pages: Page[] = [
  // HTML Document Structure Pages
  {
    id: 1,
    lesson_id: 1,
    page_number: 1,
    page_type: 'text',
    content: `
      <h1>HTML Document Structure</h1>
      <p>Every HTML document has a basic structure that includes the following elements:</p>
      <ul>
        <li><strong>DOCTYPE declaration</strong>: Specifies the HTML version being used</li>
        <li><strong>html element</strong>: The root element of the HTML document</li>
        <li><strong>head element</strong>: Contains meta-information about the document</li>
        <li><strong>body element</strong>: Contains the visible content of the page</li>
      </ul>
      <p>Here's an example of a basic HTML document structure:</p>
      <pre>
      &lt;!DOCTYPE html&gt;
      &lt;html lang="en"&gt;
      &lt;head&gt;
          &lt;meta charset="UTF-8"&gt;
          &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
          &lt;title&gt;Document Title&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
          &lt;h1&gt;Hello, World!&lt;/h1&gt;
          &lt;p&gt;This is a paragraph.&lt;/p&gt;
      &lt;/body&gt;
      &lt;/html&gt;
      </pre>
    `,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  {
    id: 2,
    lesson_id: 1,
    page_number: 2,
    page_type: 'video',
    content: 'https://www.youtube.com/embed/UB1O30fR-EE',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  // HTML Tags and Elements Pages
  {
    id: 3,
    lesson_id: 2,
    page_number: 1,
    page_type: 'text',
    content: `
      <h1>HTML Tags and Elements</h1>
      <p>HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, content, and an end tag.</p>
      <h2>Common HTML Tags</h2>
      <ul>
        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Headings from most important to least important</li>
        <li><strong>&lt;p&gt;</strong>: Paragraph</li>
        <li><strong>&lt;a&gt;</strong>: Hyperlink</li>
        <li><strong>&lt;img&gt;</strong>: Image</li>
        <li><strong>&lt;ul&gt;</strong>: Unordered list</li>
        <li><strong>&lt;ol&gt;</strong>: Ordered list</li>
        <li><strong>&lt;li&gt;</strong>: List item</li>
        <li><strong>&lt;div&gt;</strong>: Division or section</li>
        <li><strong>&lt;span&gt;</strong>: Inline container</li>
      </ul>
    `,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  // CSS Selectors Pages
  {
    id: 4,
    lesson_id: 3,
    page_number: 1,
    page_type: 'text',
    content: `
      <h1>CSS Selectors</h1>
      <p>CSS selectors are patterns used to select the elements you want to style.</p>
      <h2>Basic Selectors</h2>
      <ul>
        <li><strong>Element selector</strong>: Selects all elements with a specific HTML tag</li>
        <li><strong>Class selector</strong>: Selects all elements with a specific class attribute</li>
        <li><strong>ID selector</strong>: Selects a single element with a specific id attribute</li>
        <li><strong>Universal selector</strong>: Selects all elements</li>
      </ul>
      <h2>Examples</h2>
      <pre>
      /* Element selector */
      p {
        color: red;
      }

      /* Class selector */
      .highlight {
        background-color: yellow;
      }

      /* ID selector */
      #header {
        font-size: 24px;
      }

      /* Universal selector */
      * {
        margin: 0;
        padding: 0;
      }
      </pre>
    `,
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  }
];

// Mock Enrollments
export const enrollments: Enrollment[] = [
  {
    id: 1,
    course_id: 1,
    user_id: 1,
    progress_percent: 25.0,
    status: 'enrolled',
    enrolled_date: '2023-02-01T00:00:00Z',
    updated_at: '2023-02-05T00:00:00Z'
  },
  {
    id: 2,
    course_id: 2,
    user_id: 1,
    progress_percent: 10.0,
    status: 'enrolled',
    enrolled_date: '2023-02-10T00:00:00Z',
    updated_at: '2023-02-12T00:00:00Z'
  }
];

// Helper function to get chapters for a specific course
export const getChaptersByCourseId = (courseId: number): Chapter[] => {
  return chapters.filter(chapter => chapter.course_id === courseId);
};

// Helper function to get lessons for a specific chapter
export const getLessonsByChapterId = (chapterId: number): Lesson[] => {
  return lessons.filter(lesson => lesson.chapter_id === chapterId);
};

// Helper function to get pages for a specific lesson
export const getPagesByLessonId = (lessonId: number): Page[] => {
  return pages.filter(page => page.lesson_id === lessonId);
};

// Helper function to get course by ID
export const getCourseById = (courseId: number): Course | undefined => {
  return courses.find(course => course.id === courseId);
};

// Helper function to get lesson by ID
export const getLessonById = (lessonId: number): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === lessonId);
};

// Helper function to get chapter by ID
export const getChapterById = (chapterId: number): Chapter | undefined => {
  return chapters.find(chapter => chapter.id === chapterId);
};

// Mock current user (for demonstration)
export const currentUser: User = users[0];
