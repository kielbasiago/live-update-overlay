import { StatsTable } from './StatsTable';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from 'antd';
import { data } from '../server/rawData';

export default {
  title: 'Example/Stats Table',
  component: StatsTable
} as ComponentMeta<StatsTable>;

const { Title } = Typography;

export const Default: ComponentStory<StatsTable> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Title>DS3 Standings</Title>
    <StatsTable {...args} />
  </div>
);

Default.args = {
  standings: data
};
