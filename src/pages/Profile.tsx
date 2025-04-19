
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-xl font-semibold">Vui lòng đăng nhập để xem thông tin cá nhân</h2>
        </div>
      </MainLayout>
    );
  }

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
                <Input id="fullName" value={user.full_name} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={user.email} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Vai trò</Label>
                <Input 
                  id="role" 
                  value={user.role === 'admin' ? 'Quản trị viên' : 'Người dùng'} 
                  readOnly 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Trạng thái</Label>
                <Input 
                  id="status" 
                  value={'Đang hoạt động'} 
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
