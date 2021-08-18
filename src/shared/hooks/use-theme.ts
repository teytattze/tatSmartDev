import * as React from 'react';
import { ThemeContext } from '../../components/internals/theme.provider';

export const useTheme = () => React.useContext(ThemeContext);
