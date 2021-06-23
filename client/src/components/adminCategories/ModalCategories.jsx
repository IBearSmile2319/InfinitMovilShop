import { useState } from 'react';
import { Modal, Button, Input,
   Upload, Space
   } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../actions/category.actions';

const ModalCategories = () => {
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()
  const [categoryName, setCategoryName] = useState('')
  const [parentCategoryId, setParentCategoryId] = useState('')
  const [categoryImage, setCategoryImage] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    setCategoryName('')
    setParentCategoryId('')
    setCategoryImage('')
  };

  const handleOk = () => {
    setIsModalVisible(false);
    const form = new FormData()
    form.append("name", categoryName)
    form.append("parentId", parentCategoryId)
    form.append("categoryImage", categoryImage)
    dispatch(addCategory(form))
    setCategoryName('')
    setParentCategoryId('')
    setCategoryImage('')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCategoryName('')
    setParentCategoryId('')
    setCategoryImage('')
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id, name: category.name,
        children:category.children?category.children:null
      })
    }
    return options
  }
  const upload = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    maxCount: 1,

  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Añadir
      </Button>
      <Modal title="Añadir nueva categoria"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Guardar
          </Button>,
        ]}
      >
        <Input
          value={categoryName}
          placeholder="Nombre de la nueva categoria"
          onChange={e => setCategoryName(e.target.value)}
        />
        <br />
        <br />
        <select name="" id="" className="selection"
          value={parentCategoryId}
          onChange={e => setParentCategoryId(e.target.value)}
        >
            <option selected>Selecciona la categoria</option>
          {
            createCategoryList(category.categories).map(o =>
              <optgroup key={o.value} label={o.name}>
                <option value={o.value}>{o.name}</option>
               {o.children?createCategoryList(o.children).map(e =>
                  <option key={e.value} value={e.value}>{e.name}</option>
                ) : null}
              </optgroup>
            )
          }
        </select>
        <br />
        <br />
        <Space
          direction="vertical"
          style={{ width: '100%' }}
          size="large"
          onChange={e => setCategoryImage(e.target.files[0])}
        >
          <Upload
            {...upload}

          >
            <Button
              icon={<UploadOutlined />}

            >Upload (Max: 1)</Button>
          </Upload>

        </Space>
      </Modal>
    </>
  );
}

export default ModalCategories
