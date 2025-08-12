import ProtectedRoute from '@/app/components/auth/ProtectedRoute';
import CRMApp from '@/app/components/CRMApp';

export default function CRMPage() {
  return (
    <ProtectedRoute>
      <CRMApp />
    </ProtectedRoute>
  );
}