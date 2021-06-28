import { Button, Input, Space, Spin, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPage } from "../../actions/page.actions";
import {createCategoryList,linearCreateCategoryList} from "../../helpers/createCategoryList";
const { TextArea } = Input
const ModalPages = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const category = useSelector(state => state.category)
    const page = useSelector(state => state.page)
    const [title, setTitle] = useState("")
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState("")
    const [type, setType] = useState("")
    const [desc, setDesc] = useState("")
    const [banners, setBanners] = useState([])
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => {
        setCategories(
            linearCreateCategoryList(category.categories)
        )

    }, [category])

    useEffect(() => {
        // poner el spiner luego
        if (!page.loading) {
            setIsModalVisible(false);
        }
    }, [page])
    // modal
    const showModal = () => {
        setIsModalVisible(true);
    }
    const handleOk = () => {
        setIsModalVisible(false);
        submitPageForm()
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    }
    // pages
    const onCategoryChange = (e) => {
        const category = categories.find(category => category.value === e.target.value)

        setCategoryId(e.target.value)

       setType(category.type)
    }
    const handleBannersImg = (e) => {
        console.log(e)
        setBanners([...banners, e.target.files[0]])
    }
    const handleProductsImg = (e) => {
        console.log(e)
        setProducts([...products, e.target.files[0]])
    }
    const submitPageForm = (e) => {

        const form = new FormData()
        form.append('title', title)
        form.append('description', desc)
        form.append('category', categoryId)
        form.append('type', type?type:"")
        banners.forEach((banner, index) => {
            form.append('banners', banner)
        })
        products.forEach((product, index) => {
            form.append('products', product)
        })
        dispatch(createPage(form))
    }

    

    const upload = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        maxCount: 1,

    }
    return (

        <>
                <Spin spinning={page.loading?true:false}  tip="Loading...">
                    <Button type="default" onClick={showModal}>
                        Nueva pagina
                    </Button>
                </Spin>

            <Modal title="Crear nueva pagina"
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
                    value={title}
                    placeholder="Titulo de la pagina"
                    onChange={e => setTitle(e.target.value)}
                />
                <br />
                <br />
                <select name="" id="" className="selection"
                    value={categoryId}
                    onChange={onCategoryChange}
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
                <TextArea
                    placeholder="Descripción pequeña"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    rows={5}
                />
                <br />
                <br />

                <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                    onChange={handleBannersImg}
                >
                    <Upload
                        {...upload}

                    >
                        <Button
                            icon={<UploadOutlined />}

                        >Upload (Max: 1)</Button>
                    </Upload>

                </Space>
                <br />
                <br />
                <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                    onChange={handleProductsImg}
                >
                    <Upload
                        {...upload}

                    >
                        <Button
                            icon={<UploadOutlined />}

                        >Upload (Max: 4)</Button>
                    </Upload>

                </Space>

            </Modal>

        </>
    )
}

export default ModalPages
