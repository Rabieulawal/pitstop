import type { ReactNode, ElementType as ReactElementType } from 'react';
interface MetaProps {
    as?: ReactElementType;
    name?: string;
    title?: string;
    description?: string;
    image?: string;
    color?: string;
    manifest?: string | false;
    children?: ReactNode;
}
declare const Meta: ({ as: ElementType, name, title, description, image, color, manifest, children }: MetaProps) => any;
export = Meta;
//# sourceMappingURL=index.d.ts.map