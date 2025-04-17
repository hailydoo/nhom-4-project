
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { currentUser } from "@/data/mockData";

export default function Profile() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <User className="h-6 w-6" />
              Thông tin cá nhân
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Họ và tên</Label>
                <Input id="fullName" value={currentUser.full_name} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={currentUser.email} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Vai trò</Label>
                <Input 
                  id="role" 
                  value={currentUser.role === 'admin' ? 'Quản trị viên' : 'Người dùng'} 
                  readOnly 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Trạng thái</Label>
                <Input 
                  id="status" 
                  value={currentUser.status === 'active' ? 'Đang hoạt động' : 'Không hoạt động'} 
                  readOnly 
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Cập nhật thông tin</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
