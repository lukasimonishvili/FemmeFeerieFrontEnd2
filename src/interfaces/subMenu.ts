import NavigationInterface from "./navigation";

interface subMenuInterface {
  isMenuOpen: boolean;
  loading: boolean;
  menuData: {
    [key: string]: Array<NavigationInterface> | null;
  };
  activeMenu: string | null;
}

export default subMenuInterface;
