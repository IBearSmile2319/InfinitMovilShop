import { Button, Form, Collapse, Input, Space, message, Radio } from 'antd';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../actions';


const { Panel } = Collapse;
const NewAddress = (props) => {
    const { initialData } = props;
    const [name, setName] = useState(initialData ? initialData.name : "");
    const [mobileNumber, setMobileNumber] = useState(
        initialData ? initialData.mobileNumber : ""
    );
    const [pinCode, setPinCode] = useState(
        initialData ? initialData.pinCode : ""
    );
    const [locality, setLocality] = useState(
        initialData ? initialData.locality : ""
    );
    const [address, setAddress] = useState(
        initialData ? initialData.address : ""
    );
    const [cityDistrictTown, setCityDistrictTown] = useState(
        initialData ? initialData.cityDistrictTown : ""
    );
    const [state, setState] = useState(initialData ? initialData.state : "");
    const [landmark, setLandmark] = useState(
        initialData ? initialData.landmark : ""
    );
    const [alternatePhone, setAlternatePhone] = useState(
        initialData ? initialData.alternatePhone : ""
    );
    const [addressType, setAddressType] = useState(
        initialData ? initialData.addressType : ""
    );
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.user);
    // const [submitFlag, setSubmitFlag] = useState(false);
    const [id, setId] = useState(initialData ? initialData._id : "");

    const onAddressSubmit = () => {
        const payload = {
            address: {
                name,
                mobileNumber,
                pinCode,
                locality,
                address,
                cityDistrictTown,
                state,
                landmark,
                alternatePhone,
                addressType,
            },
        }
        if (id) {
            payload.address._id = id;
        }
        dispatch(addAddress(payload));
        // setSubmitFlag(true);
        message.success('Dirección guardad!')
    }
    // useEffect(() => {
    //     if (submitFlag) {
    //         let _address = {};
    //         if (id) {
    //             _address = {
    //                 _id: id,
    //                 name,
    //                 mobileNumber,
    //                 pinCode,
    //                 locality,
    //                 address,
    //                 cityDistrictTown,
    //                 state,
    //                 landmark,
    //                 alternatePhone,
    //                 addressType,
    //             };
    //         } else {
    //             _address = user.address.slice(user.address.length - 1)[0];
    //         }

    //         // props.onSubmitForm(_address);
    //     }
    // }, [user.address]);

    const onFinishFailed = (errorInfo) => {
        message.error('Faltan rellenar campos')
    };
    return (
        <>
            <Collapse>
                <Panel header="Agregar dirección de entrega (opcional)" key="1">
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onAddressSubmit}
                        onFinishFailed={onFinishFailed}
                    >
                        {/* <Space direction='vertical'> */}
                        <Space>
                            <Form.Item
                                label="Nombre"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Es requerido!',
                                    },
                                ]}
                            >
                                <Input value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Item>
                            <Form.Item
                                label="telefono"
                                name="mobileNumber"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Es requerido!',
                                    },
                                ]}
                            >
                                <Input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                            </Form.Item>
                        </Space>
                        <Space>
                            <Form.Item
                                label="Codigo pin"
                                name="pincode"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Es requerido!',
                                    },
                                ]}
                            >
                                <Input value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
                            </Form.Item>
                            <Form.Item
                                label="Localidad"
                                name="locality"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Es requerido!',
                                    },
                                ]}
                            >
                                <Input value={locality} onChange={(e) => setLocality(e.target.value)} />
                            </Form.Item>
                        </Space>
                        <Form.Item
                            label="dirección"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Es requerido!',
                                },
                            ]}
                        >
                            <Input value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Item>
                        <Space>
                            <Form.Item
                                label="tipo"
                                name="cityDistrictTown"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Es requerido!',
                                    },
                                ]}
                            >
                                <Input value={cityDistrictTown} onChange={(e) => setCityDistrictTown(e.target.value)} placeholder="ciudad/distrito/pueblo" />
                            </Form.Item>
                            <Form.Item
                                label="Estado"
                                name="state"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Es requerido!',
                                    },
                                ]}
                            >
                                <Input value={state} onChange={(e) => setState(e.target.value)} />
                            </Form.Item>
                        </Space>
                        <Space>
                            <Form.Item
                                label="Referencia"
                                name="landmark"

                            >
                                <Input value={landmark} onChange={(e) => setLandmark(e.target.value)} placeholder="(Opcional)" />
                            </Form.Item>
                            <Form.Item
                                label="A. Telefono"
                                name="alternatePhone"

                            >
                                <Input value={alternatePhone} onChange={(e) => setAlternatePhone(e.target.value)} placeholder="(Opcional)" />
                            </Form.Item>
                           
                        </Space>
                        <Form.Item
                                label="Tipo de direccion"
                                name="addressType"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Es requerido!',
                                    },
                                ]}
                            >
                                <Radio.Group onChange={(e)=>setAddressType(e.target.value)} value={addressType}>
                                    <Radio value="casa">Casa</Radio>
                                    <Radio value="trabajo">trabajo</Radio>
                                </Radio.Group>
                            </Form.Item>
                        {/* </Space> */}
                        <Form.Item>
                            <Button htmlType="submit">
                                Guardar direccion
                            </Button>
                        </Form.Item>

                    </Form>
                </Panel>
            </Collapse>
        </>
    )
}

export default NewAddress
