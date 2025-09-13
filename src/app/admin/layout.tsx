import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { adminNavLinks } from '@/lib/data';
import LogoutButton from './inquiries/logout-button';
import Logo from '@/components/logo';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {adminNavLinks.map((link) => (
              <SidebarMenuItem key={link.name}>
                <SidebarMenuButton asChild>
                  <Link href={link.href}>
                    <link.icon />
                    <span>{link.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <LogoutButton />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 bg-background border-b">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold font-headline">Admin Dashboard</h1>
        </header>
        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
