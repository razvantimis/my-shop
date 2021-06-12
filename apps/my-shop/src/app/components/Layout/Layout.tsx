import React, { FC } from "react";
import { GlobalStyles, InnerStyles, PageLayout } from "./Layout.style";

const Layout: FC = ({ children }) => (
  <PageLayout>
    <GlobalStyles />
    <InnerStyles>{children}</InnerStyles>
  </PageLayout>
)

export default Layout;