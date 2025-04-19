import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  full_name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: number;
    full_name: string;
    email: string;
    role: string;
  };
}

export const authApi = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    try {
      const response = await axios.post(`${API_URL}/login`, data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: 'Đã có lỗi xảy ra' };
    }
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: 'Đã có lỗi xảy ra' };
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}; 