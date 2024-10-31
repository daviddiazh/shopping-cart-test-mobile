import React from 'react';
import IcoMoon from 'react-icomoon';
import {scale} from 'react-native-size-matters';
import {Path, Svg} from 'react-native-svg';
import iconsSet from './icons.json';
import { IconProps } from './interface';
import { COLORS, SPACING } from '../../theme';

export const Icon: React.FC<IconProps> = ({
  name = 'bank',
  size = scale(SPACING[20]),
  color = COLORS.dark,
}) => (
  <IcoMoon
    native
    SvgComponent={Svg}
    PathComponent={Path}
    iconSet={iconsSet}
    size={scale(size)}
    color={color}
    icon={name}
    disableFill={true}
  />
);
