import AdminCard from "../../components/AdminCard"
import TableUsers from "../../components/AdminUsers/TableUsers"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import AdminSection from "../../components/navbar/components/admin/AdminSection"

const Users = () => {
    return (
        <div className="admin">
            <AdminNavbar />
            <AdminSection page="Usuarios">
                    <AdminCard>
                        <TableUsers/>
                    </AdminCard>

            </AdminSection>
        </div>
    )
}

export default Users
