import axios from 'axios';

// Sử dụng URL tương đối thay vì URL tuyệt đối
const API_URL = '/api/courses';

export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  chapters?: Chapter[];
}

export interface Chapter {
  id: number;
  course_id: number;
  title: string;
  chapter_order: number;
  created_at: string;
  updated_at: string;
}

export const courseApi = {
  getAllCourses: async (): Promise<Course[]> => {
    try {
      console.log('Calling API:', API_URL);
      const response = await axios.get(API_URL);
      console.log('API Response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('API Error:', error);
      throw error.response?.data || { message: 'Đã có lỗi xảy ra khi tải khóa học' };
    }
  },

  getCourseById: async (id: number): Promise<Course> => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: 'Đã có lỗi xảy ra khi tải chi tiết khóa học' };
    }
  }
}; 