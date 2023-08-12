import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {
    const tabs = [
        {
            label: "Home",
            icon: <HomeRounded sx={{verticalAlign: "middle", mb: 1}}/>,
            ...tabProps(0)
        },
        {
            label: "About us",
            icon: <FaceRounded sx={{verticalAlign: "middle", mb: 1}}/>,
            ...tabProps(1)
        },
        {
            label: "Resumes",
            icon: <TextSnippetRounded sx={{verticalAlign: "middle", mb: 1}}/>,
            ...tabProps(2)
        },
        {
            label: "My projects",
            icon: <TerminalRounded sx={{verticalAlign: "middle", mb: 1}}/>,
            ...tabProps(3)
        },
        {
            label: "Comment Contributes",
            icon: <MessageRounded sx={{verticalAlign: "middle", mb: 1}}/>,
            ...tabProps(4)
        },
        {
            label: "call me",
            icon: <ConnectWithoutContactRounded sx={{verticalAlign: "middle", mb: 1}}/>,
            ...tabProps(5)
        },
    ]

    return tabs;
};
