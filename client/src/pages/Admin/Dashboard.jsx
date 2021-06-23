import Card from "../../components/Card"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import AdminSection from "../../components/navbar/components/admin/AdminSection"

const Dashboard = () => {
    return (
        <div className="admin">
            <AdminNavbar />
            <AdminSection page="Dashboard">
                    <Card>
                        hola
                    </Card>
            </AdminSection>
        </div>
    )
}

export default Dashboard
