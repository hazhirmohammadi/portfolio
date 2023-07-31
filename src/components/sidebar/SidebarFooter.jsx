import {Box, Typography} from "@mui/material";
import {CopyrightRounded, FavoriteRounded} from "@mui/icons-material";

const SidebarFooter = () => {
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "end",
                    height: 100
                }}
            >
                <Typography
                    variant="subtitle2"
                    color="whitesmoke"
                >
                    Create by {" "}
                    <FavoriteRounded
                        sx={{
                            verticalAlign: "middle",
                            color: "tomato",
                            height: 15
                        }}/>
                    <Typography
                        variant="caption"
                        color="whitesmoke"
                    >
                        Copy right 2023{" "}
                        <CopyrightRounded
                            sx={{
                                verticalAlign: "middle",
                                color: "tomato",
                                height: 15
                            }}
                        />
                    </Typography>
                </Typography>
            </Box>
        </>
    )
}
export default SidebarFooter;