import useRole from "../../../Components/hooks/useRole";

const Profile = () => {
    const { userWithRole } = useRole()
    const { name, email, role, address } = userWithRole
    return (
        <div className="flex text-left text-2xl gap-4 mx-4 capitalize justify-center items-center">
            <div className="flex-1 text-3xl">
                <p>Name:- {name}</p>
                <p>Role:- {role}</p>
            </div>
            <div className="flex-1">
                <h2 className="text-3xl ">Address</h2>
                <hr className="border-red-500 my-4" />
                <div className="flex flex-col gap-2">
                    <p>Email:- {email}</p>
                    <p>Phone:- {address?.phone}</p>
                    <p>Country:- {address?.country}</p>
                    <p>Zilla:- {address?.zilla}</p>
                    <p>Upo Zilla:- {address?.upoZilla}</p>
                    <p>Village:- {address?.village}</p>
                    <p>Street:- {address?.street}</p>
                </div>

            </div>

        </div>
    );
};

export default Profile;