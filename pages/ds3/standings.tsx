import React from 'react';
import { ERLayout } from '~/components/ERLayout';
import { StatsTable } from '~/components/StatsTable';
import { data } from '~/server/rawData';
import styled from 'styled-components';
import { Typography } from 'antd';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const { Title } = Typography;

export default function Standings() {
  return (
    <Container>
      <Title>DS3 Standings</Title>
      <StatsTable standings={data} />
    </Container>
  );
}

Standings.getLayout = (page: React.ReactElement) => <ERLayout>{page}</ERLayout>;
