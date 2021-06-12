import { FC } from "react";
import { PageLayout } from "./Layout.style";

const Layout: FC = ({ children }) => (
  <PageLayout>
    {children}
  </PageLayout>
)

export default Layout;