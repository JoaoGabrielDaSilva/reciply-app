import { Redirect, Stack } from 'expo-router';

import { useAuth } from '../../store/use-auth';

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/(app)/(tabs)/home" />;
  }

  return <Stack />;
}
