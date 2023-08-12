import * as Yup from "yup";
export const contactValidationSchema = Yup.object().shape({
   fullname: Yup.string().required("Name and surname are required"),
   email: Yup.string()
       .email("The email address is not valid")
       .required("Email address is required"),
   subject: Yup.string().required("Writing the title is mandatory"),
   message: Yup.string().required("Writing a message is mandatory"),
});