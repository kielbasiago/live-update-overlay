import { TableColumnType, Table } from 'antd';
import orderBy from 'lodash/orderBy';
import { useMemo } from 'react';
import { Standing } from '~/types';
import { MatchIndicator } from './MatchIndicator';

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
          {name.replace(/[\s]/g, ' ')}
        </a>
      );
    },
    align: 'left'
  },
  {
    title: 'Matches Played',
    dataIndex: 'matchesPlayed'
  },
  {
    title: 'Wins',
    dataIndex: 'wins'
  },
  {
    title: 'Draws',
    dataIndex: 'draws'
  },
  {
    title: 'Losses',
    dataIndex: 'losses'
  },
  {
    title: 'Gates Finished',
    dataIndex: 'gatesFinished'
  },
  {
    title: 'Hits',
    dataIndex: 'hitsTaken'
  },
  {
    title: 'Points',
    dataIndex: 'points'
  },
  {
    title: 'Last 5 Matches',
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
  return <Table columns={columns} bordered={true} dataSource={ordered} pagination={false} />;
};

export type StatsTable = typeof StatsTable;
