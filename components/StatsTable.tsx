import { Anchor, TableColumnType, Table } from 'antd';
import orderBy from 'lodash/orderBy';
import { useMemo } from 'react';
import { MatchIndicator } from './MatchIndicator';
const { Link } = Anchor;

type Standing = {
  name: string;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  gatesFinished: number;
  hitsTaken: number;
  points: number;
  lastFive: ('win' | 'loss' | 'draw')[];
};

export type StatsTableProps = {
  standings: Standing[];
};

const columns: TableColumnType<Standing>[] = [
  {
    title: 'Player',
    dataIndex: 'name',
    render: (name) => {
      return (
        <a href={`https://twitch.tv/${name}`} target={'_blank'} rel="noreferrer">
          {name}
        </a>
      );
    },
    align: 'left'
  },
  {
    title: 'MP',
    dataIndex: 'matchesPlayed'
  },
  {
    title: 'D',
    dataIndex: 'draws'
  },
  {
    title: 'L',
    dataIndex: 'losses'
  },
  {
    title: 'GF',
    dataIndex: 'gatesFinished'
  },
  {
    title: 'H',
    dataIndex: 'hitsTaken'
  },
  {
    title: 'Pts',
    dataIndex: 'points'
  },
  {
    title: 'Last 5',
    dataIndex: 'lastFive',
    render: (lastFive: Standing['lastFive']) => {
      return (
        <>
          {lastFive.map((race, idx) => (
            <MatchIndicator key={idx} status={race as 'win' | 'loss' | 'draw'} />
          ))}
        </>
      );
    }
  }
];

export const StatsTable = ({ standings }: StatsTableProps) => {
  const ordered = useMemo(() => orderBy(standings, (standing) => standing.points, 'desc'), [standings]);
  return <Table columns={columns} dataSource={ordered} />;
};

export type StatsTable = typeof StatsTable;
