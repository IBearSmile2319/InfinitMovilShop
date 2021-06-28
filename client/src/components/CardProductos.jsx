import { Button, Card, Tooltip } from "antd"
import { Link } from "react-router-dom"
import {
    ShoppingCartOutlined,
} from '@ant-design/icons'
import { generatePublicUrl } from "../urlConfig"
import { useDispatch } from "react-redux"
import { addToCart } from "../actions"
const CardProductos = ({ id, img, title, price, link,offer }) => {
    const dispatch = useDispatch()
    return (
        <Card
            hoverable
            title={title}
            style={{ width: '100%', fontSize: 12 }}
            cover={
                <Link to={link} style={{ width: '100%', height: 120, alignItems: 'center' }}>
                    <img alt={title}
                        src={generatePublicUrl(img)}
                        style={{ width: '100%', height: '100%', objectFit: "contain", margin: '2px 0 0 0' }}
                    />
                </Link>
            }
        // actions={[
        //     <SettingOutlined key="setting" />,
        //     <EditOutlined key="edit" />,
        //     <EllipsisOutlined key="ellipsis" />,
        // ]}
        >
            <div className="d-flex item-center space-between">
                <Link className="card_product-link" to={link}>
                    <div>S/.{price ? price : 0} PEN</div>
                </Link>
                <Tooltip title="Añadir al carrito">
                    <Button
                        onClick={() => {
                            dispatch(addToCart({ _id:id, name:title, price, img }))
                        }}
                        shape="circle"
                        icon={<ShoppingCartOutlined />}
                    />
                </Tooltip>
            </div>
        </Card>
        // <article className="card_product--content">

        //     <div className="card_product-icon">
        //         <ul>
        //             <li>
        //                 <BasketOutline className="ion-icon" />
        //             </li>
        //             <li>
        //                 <HeartOutline className="ion-icon" />
        //             </li>
        //         </ul>
        //     </div>
        //     <Link className="card_product-link" to="/nose">
        //         <div className="card_product-img">
        //             <img src={img} alt="" />
        //         </div>
        //         <p>{title}</p>
        //         <span>S/.{price} PEN</span>
        //     </Link>
        // </article>
    )
}

export default CardProductos
