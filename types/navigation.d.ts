import { DrawerNavigationOptions } from "@react-navigation/drawer";
import IconNameProps from "../src/components/DrawerButton/IconNameProps";

interface CustomOptions extends DrawerNavigationOptions {
  iconName: IconNameProps;
  isDivider?: boolean;
  notifications?: number;
  sectionTitle?: string;
}
