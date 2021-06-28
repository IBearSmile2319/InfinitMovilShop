import { generatePublicUrl } from "../urlConfig"
import {
    DeleteOutlined,
    PlusOutlined,
    MinusOutlined
} from '@ant-design/icons'
import { Button, Input, Space, Tooltip } from "antd"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeCartItem } from "../actions"

const CartItem = (props) => {
    const [qty, setQty] = useState(props.cartItem.qty)
    const [total, setTotal] = useState(props.cartItem.price)
    const { _id, name, price, img } = props.cartItem
    const dispatch = useDispatch()


    // const quantityNumber = (e) => {
    //     const { value } = e.target;
    //     const reg = /^-?\d*(\.\d*)?$/;
    //     if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
    //         setQty(value)
    //     }
    // }
    const onDeleteCart=()=>{
        const payload={
            productId:_id
        }
        console.log(payload)
        dispatch(removeCartItem(payload))
    }
    const onQuantityIncrement = () => {
        setQty(qty + 1)
        props.onQuantityInc(_id, qty + 1)
        
    }
    const onQuantityDecrement = () => {
        if (qty <= 1) return;
        setQty(qty - 1)
        props.onQuantityDec(_id, qty - 1)

    }
    return (
        <tr >
            <td>
                <div className="cart-info">
                    <img src={generatePublicUrl(img)} alt="" />
                    <div>

                        <p style={{
                            marginBottom: '0',
                            width: "150px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"

                        }}>
                            {name}
                        </p>
                        <small>precio: S/.{price}</small>
                        <br />
                        <span style={{ width: '100%' }}>
                            <Tooltip color="red" title="Eliminar">
                                <Button onClick={()=>onDeleteCart()} size="small" shape="circle" icon={<DeleteOutlined />} />
                            </Tooltip>
                        </span>
                    </div>
                </div>
            </td>
            <td>
                <Space direction="vertical">
                <Button
                    onClick={onQuantityDecrement}
                    shape="circle"
                    size="small"
                    icon={<MinusOutlined />}
                />

                <Input size="small" style={{ width: '40px' }} disabled maxLength={3} value={qty}
                />

                <Button
                    onClick={onQuantityIncrement}
                    shape="circle"
                    size="small"
                    icon={<PlusOutlined />}
                />
</Space>
            </td>
            <td>S/.{total * qty}</td>
        </tr>
    )
}

export default CartItem
