import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconChartPie,
  IconServer,
  IconShoppingBag,
  IconHome,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "SideNenu1",
  },
  {
    id: uniqueId(),
    title: "subSideNenu1",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "subSideNenu2",
    icon: IconChartPie,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "subSideNenu3",
    icon: IconShoppingBag,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Modern",
    icon: IconServer,
    href: "/",
  },
];

export default Menuitems;
