import {Avatar, Typography} from "@mui/material";

const SidebarHeader = () => {
    return(
        <>
            <Avatar
                src={require("../../assets/profile.jpeg")}
                variant="rounded"
                sx={{
                    height: 200, width: 200, margin: "0 auto",
                    display:{
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",

                    },
                }}
            >
                Error
            </Avatar>
            <Typography
                sx={{textAlign: "center"}}
                color="whitesmoke"
                variant="h6"
            >
                Hazhir mohammadi
            </Typography>
            <Typography
                sx={{textAlign: "center"}}
                color="whitesmoke"

            >
                programmer front end ,and react dev
            </Typography>
        </>
    )
}
export default SidebarHeader;