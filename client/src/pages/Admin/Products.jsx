import ListProducts from "../../components/adminPoducts/ListProducts"
import Card from "../../components/Card"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import AdminSection from "../../components/navbar/components/admin/AdminSection"

const Products = () => {
    return (
        <div className="admin">
            <AdminNavbar />
            <AdminSection page="Productos">
                <Card>
                <ListProducts />
                </Card>
            </AdminSection>
        </div>
    )
}

export default Products
