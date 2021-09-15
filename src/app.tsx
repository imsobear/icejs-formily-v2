import { runApp, IAppConfig } from 'ice';

// import 'antd/dist/antd.less';

// 大量重复
// import '@alifd/next/index.scss';
import '@alifd/next/dist/next.css';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
};

runApp(appConfig);
