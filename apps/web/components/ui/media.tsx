import { svg, type SvgType } from '@assets/svg/_index';
import type { IconProps } from '@packages/types';

type Props = IconProps & {
   name: SvgType;
};

export const Media = ({
   name,
   color = 'var(--text-muted)',
   size = 24,
}: Props) => {
   const Body = svg[name];

   return <Body color={color} size={size} />;
};
