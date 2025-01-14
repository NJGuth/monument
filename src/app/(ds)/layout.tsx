import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { ScreenSize } from "@/components/utility/screen-size";

export default function DSLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <header className="h-16">
          <SidebarTrigger />
        </header>
        <main>
          <ScreenSize />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
