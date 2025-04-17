
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, BookOpen, GraduationCap, ClipboardList, 
  Settings, Plus 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Admin() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Settings className="h-6 w-6" />
              Quản trị hệ thống
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="users" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Người dùng
                </TabsTrigger>
                <TabsTrigger value="courses" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Khóa học
                </TabsTrigger>
                <TabsTrigger value="lessons" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Bài học
                </TabsTrigger>
                <TabsTrigger value="exams" className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Bài kiểm tra
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="users" className="mt-6">
                <div className="flex justify-end mb-4">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm người dùng
                  </Button>
                </div>
                <div className="text-center py-8 text-gray-500">
                  Chức năng đang được phát triển
                </div>
              </TabsContent>
              
              <TabsContent value="courses" className="mt-6">
                <div className="flex justify-end mb-4">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm khóa học
                  </Button>
                </div>
                <div className="text-center py-8 text-gray-500">
                  Chức năng đang được phát triển
                </div>
              </TabsContent>
              
              <TabsContent value="lessons" className="mt-6">
                <div className="flex justify-end mb-4">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm bài học
                  </Button>
                </div>
                <div className="text-center py-8 text-gray-500">
                  Chức năng đang được phát triển
                </div>
              </TabsContent>
              
              <TabsContent value="exams" className="mt-6">
                <div className="flex justify-end mb-4">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm bài kiểm tra
                  </Button>
                </div>
                <div className="text-center py-8 text-gray-500">
                  Chức năng đang được phát triển
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
