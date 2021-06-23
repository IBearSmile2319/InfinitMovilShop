import { useState } from 'react';
import { Modal, Button, Input } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from '../../actions/category.actions';
const ModalUpdateCategory = ({ title, idcat, parentId,typeCat }) => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    const [categoryName, setCategoryName] = useState('')
    const [parentCategoryId, setParentCategoryId] = useState('')
    const [idCat, setCategoryId] = useState('')
    const [typeCate, setTypeCategory] = useState('')

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
        setCategoryId(idcat)
        setCategoryName(title)
        setParentCategoryId(parentId ? parentId : null)
        setTypeCategory(typeCat?typeCat:null)
    };

    const handleOk = () => {
        setIsModalVisible(false);
        const form = {
            key: idCat,
            name: categoryName,
            parentId: parentCategoryId ? parentCategoryId : null,
            type:typeCate?typeCate:null
        }
        dispatch(updateCategory(form))
        setCategoryId("")
        setCategoryName("")
        setParentCategoryId("")
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setCategoryId("")
        setCategoryName("")
        setParentCategoryId("")
    };

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({
                value: category._id, name: category.name,
                children: category.children ? category.children : null
            })
        }
        return options
    }
    return (
        <>
            <Button type="dashed" onClick={showModal}>
                Editar
            </Button>
            <Modal title="Editar categoria"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancelar
                    </Button>,

                    <Button key="submit" type="primary" onClick={idcat ? handleOk : handleCancel}>
                        Guardar
                    </Button>,
                ]}
            >
                {idcat ?
                    <>
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
                                        {o.children ? createCategoryList(o.children).map(e =>
                                            <option key={e.value} value={e.value}>{e.name}</option>
                                        ) : null}
                                    </optgroup>
                                )
                            }
                        </select>
                        <br />
                        <br />
                        <select name="" id="" className="selection"
                            value={typeCate}
                            onChange={e => setTypeCategory(e.target.value)}
                        >
                            <option selected>Selecciona la categoria</option>
                            <option value="store">Store</option>
                            <option value="product">Product</option>
                            <option value="page">Page</option>
                        </select>
                    </> : <h1 className="title">Seleccione una categoria</h1>
                }

            </Modal>
        </>
    );
}

export default ModalUpdateCategory
