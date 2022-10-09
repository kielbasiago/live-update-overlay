import React from 'react';
import { ERLayout } from '~/components/ERLayout';
import { useProfile } from '~/utils/AuthProvider';

export default function ER() {
  const { user } = useProfile();
  return <div>{user?.username}</div>;
}

ER.getLayout = (page: React.ReactElement) => <ERLayout>{page}</ERLayout>;
