// File Location: app/dashboard/page.tsx
import Auth from '@/app/components/Auth';
import Quiz from '@/app/components/Quiz';

export default function Dashboard() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">AR-Enhanced E-Learning Dashboard</h1>
      <Auth />
      <Quiz />
    </main>
  );
}
