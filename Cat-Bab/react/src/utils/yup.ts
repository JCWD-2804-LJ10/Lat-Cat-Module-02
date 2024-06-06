import * as Validate from "yup"

export const registerSchema =Validate.object(
    {
        username: Validate.string().required("username is required"),
        email: Validate.string().email("email invalid").required("email must have"),
        password: Validate.string().min(8,"password must 8 char B").required("pass needed")
    }
)