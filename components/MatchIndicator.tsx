import { CheckCircleFilled, CloseCircleFilled, MinusCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
type WinIndicatorProps = {
  status: 'win' | 'draw' | 'loss';
};

const WinIndicator = styled(CheckCircleFilled)`
  margin-left: 3px;
  path {
    fill: #47ad69;
  }
`;

const LossIndicator = styled(CloseCircleFilled)`
  margin-left: 3px;
  path {
    fill: #e55550;
  }
`;

const DrawIndicator = styled(MinusCircleFilled)`
  margin-left: 3px;
  path {
    fill: #97a5ab;
  }
`;

export const MatchIndicator = ({ status }: WinIndicatorProps) => {
  switch (status) {
    case 'draw':
      return <DrawIndicator />;
    case 'loss':
      return <LossIndicator />;
    case 'win':
      return <WinIndicator />;
  }
};
