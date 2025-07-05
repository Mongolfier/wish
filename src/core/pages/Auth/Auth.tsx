import { useForm } from "react-hook-form"

import css from './Auth.module.css';

export const Auth = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className={css.auth}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username")} placeholder="Email" />
                <input {...register("password")} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};