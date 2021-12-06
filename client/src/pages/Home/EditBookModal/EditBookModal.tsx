import { useEffect, useState } from "react";

import { Button, Form, Input, Modal, Upload } from "antd";
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

  /* EXPORT TO COMPONENT */
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: any) => {
    let fileListTemp = [...info.fileList];
    fileListTemp = fileListTemp.slice(-1);
    setFileList(fileListTemp);
  };
  /* EXPORT TO COMPONENT */

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
      {/* EXPORT TO COMPONENT */}
      <Form.Item>
        <Upload
          accept="image/*"
          name="file"
          listType="picture"
          onChange={handleChange}
          fileList={fileList}
          customRequest={({ file, onSuccess, onError, onProgress }) => {
            books
              .setCoverImage(bookToEdit!.codigo, file as File, onProgress)
              .then(() => {
                if (onSuccess) {
                  onSuccess({});
                }
              })
              .catch((err) => {
                if (onError) {
                  onError(err);
                }
              });
          }}
        >
          <Button>Upload cover</Button>
        </Upload>
      </Form.Item>
      {/* EXPORT TO COMPONENT */}

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
