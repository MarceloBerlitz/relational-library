import { Layout, Menu } from "antd";

import "./styles.css";

const { Header, Content, Footer } = Layout;

type Props = {
  children: React.ReactNode;
};

export const LayoutComponent = ({ children }: Props) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Livros</Menu.Item>
          <Menu.Item key="2">Usuário</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Criado por umas pessoas aí. Todos os direitos reservados.
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
