import { User } from "../data/data.ts"

interface userProps{
    users: User[]
}

export default function UserTable({ users }: userProps) { 
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive ? "Yes" : "No"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}