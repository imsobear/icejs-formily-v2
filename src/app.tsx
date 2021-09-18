import { runApp, IAppConfig } from 'ice';

// 正常不需要主动加
import './global.scss';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
};

runApp(appConfig);
