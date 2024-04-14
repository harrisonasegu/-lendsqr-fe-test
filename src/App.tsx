import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/router.config";
import { antdThemeConfig } from "./antdTheme.config";
import { App as AntdApp } from "antd";
import { Suspense } from "react";
import { LazyLoader } from "./common/components/LazyLoader";

const App = () => {
  return (
    <ConfigProvider theme={antdThemeConfig}>
      <AntdApp>
        <Suspense fallback={<LazyLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
