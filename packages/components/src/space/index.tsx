import React from 'react';

export type SpaceSize = 'small' | 'middle' | 'large' | number;

export interface SpaceProps {
  size?: SpaceSize;
}
const Space: React.FC<SpaceProps> = props => {
  const { size = 'small' } = props;
  return <div>111</div>;
};

export default Space;
