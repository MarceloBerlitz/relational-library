import { useState } from "react";

import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useServices } from "../../../providers/ServiceProvider";

type Props = {
  onCreate?: () => void;
};

const CreateBook = ({ onCreate }: Props) => {
  const [visible, setVisible] = useState(false);
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const { books } = useServices();

  const formFinishHandler = (values: any) => {
    setLoading(true);
    const request = { ...values };
    request.autores = Array.isArray(request.autores)
      ? request.autores
      : request.autores?.split(",").map((aut: string) => aut.trim());
    books
      .createBook(request)
      .then(() => {
        if (onCreate) {
          onCreate();
        }
        form.resetFields()
        setVisible(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Button onClick={() => setVisible(true)}>Adicionar livro</Button>
      <Modal
        visible={visible}
        title="Adicionar livro"
        onCancel={() => {
          form.resetFields()
          setVisible(false);
        }}
        confirmLoading={loading}
        onOk={form.submit}
      >
        <Form form={form} layout="vertical" onFinish={formFinishHandler}>
          <Form.Item label="Título" name="titulo">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Descrição" name="descricao">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Ano" name="ano">
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Autores" name="autores">
            <Input type="text" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBook;
