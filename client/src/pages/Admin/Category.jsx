import Card from "../../components/Card"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import AdminSection from "../../components/navbar/components/admin/AdminSection"

const Category = () => {
    return (
        <div className="admin">
            <AdminNavbar />
            <AdminSection page="Category">
                    <Card>
                        que tal
                    </Card>

            </AdminSection>
        </div>
    )
}

export default Category
