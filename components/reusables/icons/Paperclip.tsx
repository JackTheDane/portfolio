import React from 'react'
import { BaseIcon } from './BaseIcon';
import svg from '@fortawesome/fontawesome-free/svgs/solid/paperclip.svg?include';

export const PaperclipIcon = ({ style, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => <BaseIcon iconSvg={svg} {...props} />
