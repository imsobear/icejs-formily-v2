
## 不再使用 babel-plugin-import

`build.json` 中移除 build-plugin-fusion/build-plugin-antd，样式全量引入，js 构建时 tree-shaking。

## 如何引入 formily

按照文档直接引入就行：

```js
import { createForm } from '@formily/core';
import { FormProvider, FormConsumer, Field } from '@formily/react';
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from '@formily/next';
```

js build 时 tree-shaking 会干掉，`esm/style.js` 配置了 sideEffects 因此会直接引入进来，不需要开发者再手动引入。

## antd：样式引入与主题定制

不需要定制主题：

```less
// src/global.less
// 如果不需要定制主题可直接引入 CSS，编译速度更快
@import '~antd/dist/antd.css';

body {
  -webkit-font-smoothing: antialiased;
}
```

需要定制主题（Less 变量覆盖）：

```less
// src/global.less
@import '~antd/dist/antd.less';
@primary-color: #f40; // 全局主色

body {
  -webkit-font-smoothing: antialiased;
}
```

## fusion: 样式引入与主题定制

不需要定制主题：

```scss
// src/global.scss
@import '~@alifd/next/dist/next.css';

body {
  -webkit-font-smoothing: antialiased;
}
```

定制主题包方式 1（主题包 CSS Vars 覆盖）：

```scss
// src/global.scss
@import '~@alifd/theme-design-pro/variables.css';
@import '~@alifd/next/index.css';

body {
  -webkit-font-smoothing: antialiased;
}
```

定制主题包方式 2（直接引入主题包打包好的全量 CSS）：

```scss
// src/global.scss
@import '~@alifd/theme-design-pro/dist/next.css';

body {
  -webkit-font-smoothing: antialiased;
}
```

定制主题包方式 3（主题包 Sass 变量覆盖）：

> @alifd/next 大于 1.24.4

```scss
// src/global.scss
@import '~@alifd/theme-design-pro/variables.scss';
@import '~@alifd/next/index.scss';

body {
  -webkit-font-smoothing: antialiased;
}
```
## fusion: 使用 fusion sass 变量的 scss 文件需要主动引入 `@alifd/next` 的 variables 文件

build-plugin-fusion 以前会给每个 sass 文件自动注入这段逻辑，移除插件后需要手动引入：

```diff
// src/layouts/BasicLayout/components/Logo/index.module.scss
+ @import '~@alifd/next/lib/core/index.scss';

.logo {
  display: flex;
  color: $color-text1-1;
}
```

## 为什么不再推荐使用 babel-plugin-import

能力可被替代：

- style 自动按需引入：对于 CSS 体积影响不是很大，稍微有点规模的项目基本都会直接/间接引入 80% 组件
- js 按需引入：build 时默认的 tree-shaking 可以达到一样的效果

引入的缺陷不好解决：

- babel-loader 默认都推荐忽略 node_modules，因此依赖里的语法无法分析生效，存在隐患
- 其他问题
