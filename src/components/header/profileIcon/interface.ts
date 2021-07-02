import React from 'react';
import { HeaderTheme } from '../interface';

export default interface ProfileIconProps {
    theme: HeaderTheme
    onClick: (event: React.MouseEvent) => void
}