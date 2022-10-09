import React from 'react';
import { ERLayout } from '~/components/ERLayout';
import { StatsTable } from '~/components/StatsTable';
import { useProfile } from '~/utils/AuthProvider';
import { data } from './rawData';

export default function Standings() {
  const { user } = useProfile();
  return <StatsTable standings={data} />;
}

Standings.getLayout = (page: React.ReactElement) => <ERLayout>{page}</ERLayout>;
