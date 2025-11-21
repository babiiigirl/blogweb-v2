import { useForm } from "react-hook-form";
import { useState } from "react";

export default function NewUser() {
    const [newUser, setNewUser] = useState("");
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        const user = JSON.stringify(data);
        try {
            const response = await fetch("http://localhost:8080/adduser", {
                method: "post", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: user,
            });
            if (response.ok) setNewUser("User added successfully!");
        } catch (error) {
            console.error("Error creating data:", error);
            setNewUser("Adding user failed!");
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ padding: 10 }}>{" "}<br />
                <span>Username:</span><br />
                <input type="text" {...register("username", { required: true })} /><br />
                {errors.username && <div style={{ color: "red" }}>Username is required</div>}
                <span>Password:</span><br />
                <input type="password" {...register("password", { required: true })} /><br />
                {errors.password && <div style={{ color: "red" }}>Password is required</div>}
                <span>Full Name:</span><br />
                <input type="text" {...register("fullname", { required: true })} />
                <br />
                {errors.fullname && <div style={{ color: "red" }}>Full Name is required</div>}
                <br /><button type="submit">Add New</button>
                <p className="text-success">{newUser}</p>
            </div>
        </form>
    );
}    