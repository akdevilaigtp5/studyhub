'use client';

import { Button } from '@/components/ui/button';
import { logout } from '@/app/admin/login/actions';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button variant="outline" type="submit">
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </form>
  );
}
