import { StatsTable } from './StatsTable';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from 'antd';

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
  standings: [
    {
      matchesPlayed: 10,
      wins: 8,
      draws: 2,
      losses: 0,
      gatesFinished: 34,
      hitsTaken: 56,
      name: 'GinoMachino',
      points: 36,
      lastFive: ['win', 'win', 'win', 'win', 'win']
    },
    {
      name: 'VSwed',
      matchesPlayed: 10,
      wins: 6,
      draws: 2,
      losses: 2,
      gatesFinished: 30,
      hitsTaken: 87,
      points: 26,
      lastFive: ['win', 'win', 'loss', 'win', 'loss']
    },
    {
      name: 'Ainrun',
      matchesPlayed: 10,
      wins: 4,
      draws: 4,
      losses: 2,
      gatesFinished: 30,
      hitsTaken: 97,
      points: 21,
      lastFive: ['loss', 'win', 'win', 'draw', 'draw']
    },
    {
      name: 'Kazoodle',
      matchesPlayed: 10,
      wins: 4,
      draws: 1,
      losses: 5,
      gatesFinished: 23,
      hitsTaken: 116,
      points: 16,
      lastFive: ['win', 'loss', 'win', 'loss', 'win']
    },
    {
      name: 'FryderyKG',
      matchesPlayed: 10,
      wins: 4,
      draws: 4,
      losses: 2,
      gatesFinished: 20,
      hitsTaken: 167,
      points: 16,
      lastFive: ['draw', 'win', 'win', 'loss', 'draw']
    },
    {
      name: 'ItzCBD',
      matchesPlayed: 10,
      wins: 2,
      draws: 52,
      losses: 3,
      gatesFinished: 30,
      hitsTaken: 100,
      points: 15,
      lastFive: ['draw', 'loss', 'win', 'win', 'draw']
    },
    {
      name: 'BlueBerryBrioche',
      matchesPlayed: 10,
      wins: 3,
      draws: 3,
      losses: 4,
      gatesFinished: 28,
      hitsTaken: 96,
      points: 15,
      lastFive: ['draw', 'loss', 'loss', 'win', 'draw']
    },
    {
      name: 'Chusommontero',
      matchesPlayed: 9,
      wins: 2,
      draws: 3,
      losses: 4,
      gatesFinished: 18,
      hitsTaken: 99,
      points: 12,
      lastFive: ['win', 'win', 'win', 'win', 'win']
    },
    {
      name: 'The_Happy_Hob',
      matchesPlayed: 10,
      wins: 11,
      draws: 2,
      losses: 7,
      gatesFinished: 23,
      hitsTaken: 116,
      points: 7,
      lastFive: ['loss', 'loss', 'loss', 'loss', 'loss']
    },
    {
      name: 'LobosJr',
      matchesPlayed: 9,
      wins: 1,
      draws: 2,
      losses: 6,
      gatesFinished: 11,
      hitsTaken: 258,
      points: 6,
      lastFive: ['draw', 'draw', 'loss', 'loss', 'loss']
    }
  ]
};
