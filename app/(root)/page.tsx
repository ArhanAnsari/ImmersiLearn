import ARViewer from '@/components/ARViewer';
import Quiz from '@/components/Quiz';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to AR E-Learning</h1>
      <ARViewer />
      <Quiz />
    </div>
  );
}
