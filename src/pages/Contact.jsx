import {useState, useEffect} from "react";
import {useTheme} from "@mui/material";
import {useFormik} from "formik";
import {
   Typography,
   Card,
   Divider,
   CardContent,
   Slide,
   TextField,
   InputAdornment,
   CardActions,
   Button,
   Chip
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {AccountCircle, Face6Rounded, SubjectRounded, EmailRounded} from "@mui/icons-material";
import {Helmet} from "react-helmet-async";
import worldMap from "../assets/map.svg"
import {contactValidationSchema} from "../Validation/contactValidation";

const Contact = ({helmetTitle}) => {
   const [loading, setLoading] = useState(false);
   const theme = useTheme();
   useEffect(() => {
      setLoading(true);
      return () => {
         setLoading(false);
      }
   }, []);

   const contactInputNames = {
      fullname: "",
      email: "",
      subject: "",
      message: ""
   }

   const formik = useFormik({
      initialValues: contactInputNames,
      onSubmit: values => {
         console.log("Form Values:", values);
      },
      validationSchema: contactValidationSchema,
   });


   return (
       <Card
           sx={{
              height: "100vh",
              backgroundColor: "whitesmoke",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
           }}
       >
          <Helmet>
             <title>{helmetTitle}</title>
          </Helmet>
          <CardContent>
             <Divider
                 textAlign="center"
                 sx={{
                    mt: 2,
                    "&::before, &::after": {
                       borderColor: "warning.main",
                    },
                 }}
             >
                <Chip
                    icon={<AccountCircle/>}
                    color="warning"
                    label={
                       <Typography
                           variant="body1"
                           color="black"
                           sx={{textAlign: "center"}}
                       >
                          contact with me
                       </Typography>
                    }
                    sx={{p: 3}}
                />
             </Divider>

             <Grid container sx={{mt: 5}}>
                <Slide
                    direction="up"
                    in={loading}
                    style={{
                       transitionDelay: loading ? "200ms" : "0ms",
                    }}
                >
                   <Grid xs={12} sm={12} md={8}>
                      <Card
                          sx={{
                             justifyContent: "center",
                             alignItems: "center",
                          }}
                      >
                         <form
                             autoComplete="off"
                             onSubmit={formik.handleSubmit}
                         >
                            <CardContent>
                               <Grid container>
                                  <Grid
                                      xs={12}
                                      sx={{direction: "ltr"}}
                                  >
                                     <Grid container spacing={2}>
                                        <Grid xs={12} md={6}>
                                           <TextField
                                               fullWidth
                                               size="small"
                                               color="warning"
                                               label="first name and last name"
                                               name="fullname"
                                               variant="outlined"
                                               helperText={
                                                  formik.touched
                                                      .fullname
                                                      ? formik
                                                          .errors
                                                          .fullname
                                                      : null
                                               }
                                               error={Boolean(
                                                   formik.touched
                                                       .fullname &&
                                                   formik
                                                       .errors
                                                       .fullname
                                               )}
                                               value={
                                                  formik.values
                                                      ?.fullname
                                               }
                                               onChange={
                                                  formik.handleChange
                                               }
                                               InputProps={{
                                                  endAdornment: (
                                                      <InputAdornment postion="end">
                                                         <Face6Rounded/>
                                                      </InputAdornment>
                                                  ),
                                               }}
                                           />
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                           <TextField
                                               fullWidth
                                               size="small"
                                               color="warning"
                                               label="آدرس ایمیل"
                                               name="email"
                                               variant="outlined"
                                               helperText={
                                                  formik.touched
                                                      .email
                                                      ? formik
                                                          .errors
                                                          .email
                                                      : null
                                               }
                                               error={Boolean(
                                                   formik.touched
                                                       .email &&
                                                   formik
                                                       .errors
                                                       .email
                                               )}
                                               value={
                                                  formik.values
                                                      ?.email
                                               }
                                               onChange={
                                                  formik.handleChange
                                               }
                                               InputProps={{
                                                  endAdornment: (
                                                      <InputAdornment postion="end">
                                                         <EmailRounded/>
                                                      </InputAdornment>
                                                  ),
                                               }}
                                           />
                                        </Grid>
                                        <Grid xs={12} md={12}>
                                           <TextField
                                               fullWidth
                                               size="small"
                                               color="warning"
                                               label="عنوان"
                                               name="subject"
                                               variant="outlined"
                                               helperText={
                                                  formik.touched
                                                      .subject
                                                      ? formik
                                                          .errors
                                                          .subject
                                                      : null
                                               }
                                               error={Boolean(
                                                   formik.touched
                                                       .subject &&
                                                   formik
                                                       .errors
                                                       .subject
                                               )}
                                               value={
                                                  formik.values
                                                      ?.subjectj
                                               }
                                               onChange={
                                                  formik.handleChange
                                               }
                                               InputProps={{
                                                  endAdornment: (
                                                      <InputAdornment postion="end">
                                                         <SubjectRounded/>
                                                      </InputAdornment>
                                                  ),
                                               }}
                                           />
                                        </Grid>
                                        <Grid xs={12} md={12}>
                                           <TextField
                                               fullWidth
                                               multiline
                                               rows={6}
                                               size="small"
                                               color="warning"
                                               label="Message text"
                                               name="message"
                                               variant="outlined"
                                               helperText={
                                                  formik.touched
                                                      .message
                                                      ? formik
                                                          .errors
                                                          .message
                                                      : null
                                               }
                                               error={Boolean(
                                                   formik.touched
                                                       .message &&
                                                   formik
                                                       .errors
                                                       .message
                                               )}
                                               value={
                                                  formik.values
                                                      ?.message
                                               }
                                               onChange={
                                                  formik.handleChange
                                               }
                                           />
                                        </Grid>
                                     </Grid>
                                  </Grid>
                               </Grid>
                            </CardContent>
                            <CardActions
                                sx={{
                                   alignItems: "end",
                                   flexDirection: "column",
                                }}
                            >
                               <Button
                                   type="submit"
                                   color="success"
                                   variant="contained"
                                   sx={{mt: 2}}
                                   fullWidth
                               >
                                  send
                               </Button>
                            </CardActions>
                         </form>
                      </Card>
                   </Grid>
                </Slide>
                <Slide
                    direction="up"
                    in={loading}
                    style={{
                       transitionDelay: loading ? "200ms" : "0ms",
                    }}
                >
                   <Grid
                       xs={0}
                       sm={0}
                       md={4}
                       sx={{
                          textAlign: "center",
                          backgroundImage: `url(${worldMap})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                       }}
                   >
                      <Typography
                          variant="h6"
                          color="black"
                          sx={{
                             fontFamily: "vazir",
                             mt: 4,
                             display: {
                                xs: "none",
                                sm: "none",
                                md: "block",
                             },
                          }}
                      >
                         Let's talk about everything together
                      </Typography>
                      <Typography
                          variant="body1"
                          color="black"
                          sx={{
                             mt: 2,
                             display: {
                                xs: "none",
                                sm: "none",
                                md: "block",
                             },
                          }}
                      >
                         👋{" "}
                         <a
                             href="mailto:younes.gh@chmail.ir"
                             alt="email"
                             style={{
                                color: "tomato",
                             }}
                         >
                            Email
                         </a>{" "}
                         Click me
                      </Typography>
                   </Grid>
                </Slide>
             </Grid>
          </CardContent>
       </Card>
   );
}
export default Contact;