import Card from "../../components/Card"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import AdminSection from "../../components/navbar/components/admin/AdminSection"
import ListCategories from "../../components/adminCategories/ListCategories"

const Category = () => {
    
    return (
        <div className="admin">
            <AdminNavbar />
            <AdminSection page="Category">
                    <Card>
                        <ListCategories/>
                    </Card>

            </AdminSection>
        </div>
    )
}

export default Category
