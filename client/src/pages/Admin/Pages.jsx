import ModalPages from "../../components/adminNewPages/ModalPages"
import Card from "../../components/Card"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import AdminSection from "../../components/navbar/components/admin/AdminSection"

const Pages = () => {
    return (
        <div className="admin">
            <AdminNavbar />
            <AdminSection page="Paginas">
                <Card>
                    <ModalPages/>
                </Card>
            </AdminSection>
        </div>
    )
}

export default Pages
