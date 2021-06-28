import { Button, Modal, Space, Upload } from "antd"
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addBanners } from "../../actions";
const AddBanners = () => {
    const [banner, setBanner] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch()
    const showModal = () => {
        setIsModalVisible(true);

    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleOk = () => {
        const form = new FormData()
        // for (let ban of banner) {
            form.append("banners", banner)
        // }
        dispatch(addBanners(form))
    }
    const handleBannerPicture = (e) => {
        setBanner(e.target.files[0])
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
            <Space
                direction="vertical"
                style={{ width: '100%' }}
                size="large"
                onChange={handleBannerPicture}
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

export default AddBanners
