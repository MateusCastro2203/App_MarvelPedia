import * as React from 'react';
import { RequestContextType } from '../service/appInterfaces';

export const RequestContext = React.createContext<RequestContextType | null>(null);

