import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { AuthPage } from '@/pages/AuthPage';
export function HomePage() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return <AuthPage />;
}