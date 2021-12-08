import { Layout, Menu } from "antd";
import { useNavigate } from "react-router";
import { useAuth } from "../../providers/AuthProvider";

import "./styles.css";

const { Header, Content, Footer } = Layout;

type Props = {
  children: React.ReactNode;
};

export const LayoutComponent = ({ children }: Props) => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ width: 400 }}
        >
          <Menu.Item key="1" onClick={() => navigate("/home")}>
            Livros
          </Menu.Item>
          <Menu.Item key="2" onClick={() => navigate("/user")}>
            Usuário
          </Menu.Item>
        </Menu>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item
            key="3"
            onClick={() => {
              setUser(null);
            }}
          >
            Sair
          </Menu.Item>
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
