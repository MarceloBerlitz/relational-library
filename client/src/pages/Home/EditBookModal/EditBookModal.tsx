import { DatePicker, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "rc-textarea";
import { useEffect } from "react";
import { BookRequest, BookResponse } from "../../../api/books";

type Props = {
  bookToEdit: BookResponse | null;
  onClose?: () => void;
};

const EditBookModal = (props: Props) => {
  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue(props.bookToEdit);
  }, [props.bookToEdit, form]);

  return (
    <Modal
      visible={!!props.bookToEdit}
      title={`Editar ${props.bookToEdit?.titulo}`}
      onCancel={props.onClose}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Título" name="titulo">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Descrição" name="descricao">
          <TextArea style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Ano" name="ano">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Autores" name="autores">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Usuário" name="usuario">
          <Select />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditBookModal;
