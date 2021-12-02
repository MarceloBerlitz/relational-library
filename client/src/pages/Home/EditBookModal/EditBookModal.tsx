import { useEffect, useState } from "react";

import { Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import { BookResponse } from "../../../api/books";
import { useServices } from "../../../providers/ServiceProvider";

type Props = {
  bookToEdit: BookResponse | null;
  onClose?: () => void;
};

const EditBookModal = ({ bookToEdit, onClose }: Props) => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const { books } = useServices();

  useEffect(() => {
    form.setFieldsValue(bookToEdit);
  }, [bookToEdit, form]);

  const formFinishHandler = (values: any) => {
    setLoading(true);
    const request = { ...bookToEdit, ...values };
    delete request.usuario;
    delete request.image;
    request.autores = Array.isArray(request.autores)
      ? request.autores
      : request.autores.split(",").map((aut: string) => aut.trim());
    request.codigoUsuario = bookToEdit?.usuario?.codigo;
    books.updateBook(bookToEdit!.codigo, request).finally(() => {
      setLoading(false);
      if (onClose) {
        onClose();
      }
    });
  };

  return (
    <Modal
      visible={!!bookToEdit}
      title={`Editar ${bookToEdit?.titulo}`}
      onCancel={onClose}
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
  );
};

export default EditBookModal;
