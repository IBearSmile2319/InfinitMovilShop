import AddBanners from "../../components/adminBanners/AddBanners"
import Card from "../../components/Card"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import AdminSection from "../../components/navbar/components/admin/AdminSection"

const Banners = () => {
    return (
        <div className="admin">
        <AdminNavbar />
        <AdminSection page="Banners">
                <Card>
                    <AddBanners/>
                </Card>

        </AdminSection>
    </div>
    )
}

export default Banners
