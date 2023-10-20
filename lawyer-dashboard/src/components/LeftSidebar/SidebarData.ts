import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from "@mui/icons-material/Work";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import InfoIcon from "@mui/icons-material/Info";
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/main",
    icon: GridViewIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },
  {
    title: "TODO & TASKS",
    path: "/tasks",
    icon: AddTaskOutlinedIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,

    subNav: [
      {
        title: "calendar",
        path: "/calendar",
      },
    ],
  },
  {
    title: "Email",
    path: "/email",
    icon: AttachEmailOutlinedIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },
  {
    title: "Clients ",
    path: "/clients",
    icon: ConnectWithoutContactOutlinedIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },
  {
    title: "Team",
    path: "/team",
    icon: PeopleOutlinedIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },

  {
    title: "Editor",
    path: "/editor",
    icon: BorderColorOutlinedIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },

  {
    title: "Services",
    path: "/services",
    icon: WorkIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },
  {
    title: "News",
    path: "/news",
    icon: NewspaperIcon,
  },
  {
    title: "Blogs",
    path: "/blogs",
    icon: ArticleOutlinedIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,

    // subNav: [
    //   {
    //     title: "AddBlog",
    //     path: "/Blogs/account/",
    //   },
    // ],
  },
  {
    title: "About",
    path: "/about",
    icon: InfoIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },
  {
    title: "Testimonials",
    path: "/testimonials",
    icon: RateReviewOutlinedIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },
  {
    title: "Subscribers",
    path: "/subscribers",
    icon: Groups2RoundedIcon,
    iconClosed: KeyboardArrowRightIcon,
    iconOpened: KeyboardArrowDownIcon,
  },
];
