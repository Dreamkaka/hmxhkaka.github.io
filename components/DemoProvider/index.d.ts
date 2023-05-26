import type { FC, PropsWithChildren } from 'react';
interface DemoProviderProps extends PropsWithChildren {
    inherit?: boolean;
}
declare const DemoProvider: FC<DemoProviderProps>;
export default DemoProvider;
