
export type User = {
  id: number;
  full_name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive' | 'banned';
};

export type Course = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  status: 'active' | 'inactive' | 'maintenance';
  created_at: string;
  updated_at: string;
};

export type Chapter = {
  id: number;
  course_id: number;
  title: string;
  chapter_order: number;
  created_at: string;
  updated_at: string;
};

export type Lesson = {
  id: number;
  chapter_id: number;
  title: string;
  lesson_order: number;
  created_at: string;
  updated_at: string;
};

export type Page = {
  id: number;
  lesson_id: number;
  page_number: number;
  page_type: 'text' | 'video' | 'other';
  content: string;
  created_at: string;
  updated_at: string;
};

export type Enrollment = {
  id: number;
  course_id: number;
  user_id: number;
  progress_percent: number;
  status: 'enrolled' | 'completed' | 'dropped';
  enrolled_date: string;
  updated_at: string;
};

export type Exam = {
  id: number;
  course_id: number;
  chapter_id: number;
  title: string;
  time_limit: number;
  total_questions: number;
  created_at: string;
  updated_at: string;
};

export type Question = {
  id: number;
  chapter_id: number;
  question_text: string;
  option_a: string | null;
  option_b: string | null;
  option_c: string | null;
  option_d: string | null;
  correct_answer: string | null;
  created_at: string;
  updated_at: string;
};
