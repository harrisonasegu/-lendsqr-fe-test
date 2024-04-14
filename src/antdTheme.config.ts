import { ThemeConfig } from "antd";

export const antdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#39CDCC",
  },
  components: {
    Input: {
      controlHeight: 50,
      colorBorder: "#545F7D26",
      colorTextPlaceholder: "#545F7D",
      fontFamily: "avenir-next-thin",
    },
    Select: {
        controlHeight: 50
    },
    Button: {
      colorBgContainerDisabled: "#39cdcc20",
      borderColorDisabled: "#39cdcc20",
      colorTextDisabled: "white",
    },
    Menu: {
      itemSelectedBg: "#39CDCC10",
      itemSelectedColor: "#213F7D",
      lineWidth: 0
    },
    Table: {
        headerBg: "white",
        headerColor: "#545F7D",
        fontSize: 12,
        boxShadow: 'box-shadow: 3px 5px 20px 0px #0000000A',
        colorText: "#545F7D"
    },
    Dropdown: {
        borderRadius: 0
    },
  },
};
