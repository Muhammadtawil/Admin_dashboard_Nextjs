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
import { useTranslations } from 'next-intl';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
function getSidebarData() {
  const t = useTranslations('SideBar');

  const SidebarData = [
    {
      title: t("main"),
      path: "/main",
      icon: GridViewIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("task"),
      path: "/tasks",
      icon: AddTaskOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,

      subNav: [
        {
          title: t("calendar"),
          path: "/calendar",
        },
      ],
    },
    {
      title: t("email"),
      path: "/email",
      icon: AttachEmailOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("clients"),
      path: "/clients",
      icon: ConnectWithoutContactOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("team"),
      path: "/team",
      icon: PeopleOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("editor"),
      path: "/editor",
      icon: BorderColorOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("services"),
      path: "/services",
      icon: WorkIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("news"),
      path: "/news",
      icon: NewspaperIcon,
    },
    {
      title: t("blogs"),
      path: "/blogs",
      icon: ArticleOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("about"),
      path: "/about",
      icon: InfoIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("testimonials"),
      path: "/testimonials",
      icon: RateReviewOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("subscribers"),
      path: "/subscribers",
      icon: Groups2RoundedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("files"),
      path: "/subscribers",
      icon: AttachFileOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },
    {
      title: t("references"),
      path: "/subscribers",
      icon: ClassOutlinedIcon,
      iconClosed: KeyboardArrowRightIcon,
      iconOpened: KeyboardArrowDownIcon,
    },


  ];

  return SidebarData;
}

export default getSidebarData;
