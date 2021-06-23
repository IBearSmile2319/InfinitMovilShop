import { Button, Modal, Space } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch} from "react-redux";
import { deleteCategories } from "../../actions/category.actions";
const ModalDeleteCategory = ({ name, catId, parentId }) => {
  const dispatch = useDispatch()
  
  const DeleteCategory = () => {
    let form = {
      key: catId,
      name: name,
      parentId: parentId ? parentId : null
    }
    console.log(form)
    dispatch(deleteCategories(form))
  }
  const confirm = () => {
    Modal.confirm({
      title: <div className="title">Deseas Eliminar esta categoria!?</div>,
      icon: <ExclamationCircleOutlined />,
      content: <div className="title">{name ? name : "Seleccione una caractegoria!"}</div>,
      onOk: DeleteCategory,
      okText: 'Eliminar',
      cancelText: 'Cancelar',
    });
  }
  return (
    <Space>
      <Button onClick={confirm}>Eliminar</Button>
    </Space>
  )
}

export default ModalDeleteCategory
