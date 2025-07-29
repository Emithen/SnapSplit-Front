import ActionBar from "@/features/my/_components/ActionBar";
import ProfileSection from "@/features/my/_components/ProfileSection";
import MenuSection from "@/features/my/_components/MenuSection";

export default function MyPage() {
  return (
    <div className="flex flex-col items-center h-screen">
      <ActionBar />
      <ProfileSection />
      <MenuSection />
    </div>
  );
}
 