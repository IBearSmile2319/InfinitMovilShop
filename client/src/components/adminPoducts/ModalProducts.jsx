import { useState } from 'react';
import { Modal, Button, Input, Upload, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions/product.actions';
const { TextArea } = Input
const ModalProducts = () => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    const [isModalVisible, setIsModalVisible] = useState(false);

    // estados de los datos a almacenar

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [productPicture, setProductPicture] = useState('')


    const showModal = () => {
        setIsModalVisible(true);

    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleOk = () => {
        const form = new FormData()
        form.append("name", name)
        form.append("quantity", quantity)
        form.append("price", price)
        form.append("description", description)
        form.append("category", categoryId)
        for (let pic of productPicture) {
            form.append("productPictures", pic)
        }
        dispatch(addProduct(form))
        setIsModalVisible(false);
    }

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({
                value: category._id, name: category.name,
                children: category.children ? category.children : null
            })
        }
        return options
    }
    const handleProductPicture = (e) => {
        setProductPicture([
            ...productPicture,
            e.target.files[0]
        ])
    }
    const quantityNumber = (e) => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            setQuantity(value)
        }
    }
    const priceNumber = (e) => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            setPrice(value)
        }
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
                    value={name}
                    placeholder="Titulo del producto"
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <br />
                <Input prefix="[ ]" value={quantity} onChange={quantityNumber} placeholder="Stock" />
                <br />
                <br />
                <Input prefix="S/" value={price} onChange={priceNumber} placeholder="Precio" min={0} />
                <br />
                <br />
                <TextArea
                    placeholder="Descripción pequeña"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={6}
                />
                <br />
                <br />

                <select name="" id="" className="selection"
                    value={categoryId}
                    onChange={e => setCategoryId(e.target.value)}
                >
                    <option>Seleciona la categoria</option>
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
                <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                    onChange={handleProductPicture}
                >
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType='picture'
                    >
                        <Button
                            icon={<UploadOutlined />}>Upload (Max: 10)</Button>
                    </Upload>

                </Space>
            </Modal>
        </>
    )
}
export default ModalProducts
