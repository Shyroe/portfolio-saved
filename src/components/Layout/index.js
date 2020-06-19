import React, { useState, Fragment } from "react";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as S from "./styled";
import Profile from "../Profile/index";
import Resume from "../Resume/index";
import Navigation from "../Navigation/index";
import Portfolio from "../Portfolio/index";
import Contact from "../Contact/index";

// const index = () => {
export default () => {
  const menuTabsData = [
    {
      id: 1,
      icon: "profile",
      active: false,
      title: "profile",
    },
    {
      id: 2,
      icon: "resume",
      active: false,
      title: "resume",
    },
    {
      id: 3,
      icon: "portfolio",
      active: false,
      title: "portfolio",
    },
    {
      id: 4,
      icon: "contact",
      active: false,
      title: "contact",
    },
  ];

  const [activeTab, setActiveTab] = useState("");
  const [activeTheme, setActiveTheme] = useState("");
  console.log("ActiveTheme State: ", activeTheme);
  const [enableTheme, setEnableTheme] = useState(false);
  const [enableConfig, setEnableConfig] = useState(false);
  // const [activeLink, setActiveLink] = useState(false);
  const [menuTabs, setMenuTabs] = useState(menuTabsData);
  // console.log("MenuTabs State: ", menuTabs);

  const renderTab = (tab) => {
    switch (tab) {
      case "profile":
        return <Profile />;
        break;
      case "resume":
        return <Resume activeTheme={activeTheme} />;
        break;
      case "portfolio":
        return <Portfolio />;
        break;
      case "contact":
        return <Contact />;
        break;
      default:
        return <Profile />;
    }
  };

  const toggleEnableTheme = () => {
    setEnableTheme(!enableTheme);
  };

  const changeActiveTheme = (theme) => {
    console.log("activeTheme - changeActiveTheme: ", activeTheme);
    setActiveTheme(theme);
  };

  const openTab = (id, nameTab) => {
    console.log("Open tab Disparado");
    //Zerar todos os items active
    const menusActiveFalse = menuTabs.map((tab) => {
      tab.active = false;
      return tab;
    });
    console.log("ActiveFalse All: ", menusActiveFalse);

    //Disable Config
    setEnableConfig(false);

    //Modificar o state active do item selecionado
    menuTabs.forEach((tab) => (tab.id == id ? (tab.active = true) : null));
    setActiveTab(nameTab);

    //Enable  Config
    if (nameTab == "resume") {
      setEnableConfig(true);
    }
  };

  return (
    <Fragment>
      <Navigation menuTabs={menuTabs} openTab={openTab} />
      {enableConfig && (
        <S.WrapperConfigTheme>
          <S.WrapperIcon onClick={toggleEnableTheme}>
            <S.IconCog />
          </S.WrapperIcon>
          {enableTheme && (
            <S.WrapperThemes>
              <S.ThemePrimary onClick={() => changeActiveTheme("primary")} />
              <S.ThemeSecondary
                onClick={() => changeActiveTheme("secondary")}
              />
              <S.ThemeTertiary onClick={() => changeActiveTheme("tertiary")} />
              <S.ThemeQuaternary
                onClick={() => changeActiveTheme("quaternary")}
              />
            </S.WrapperThemes>
          )}
        </S.WrapperConfigTheme>
      )}
      <S.WrapperLayout>{renderTab(activeTab)}</S.WrapperLayout>
    </Fragment>
  );
};

// export default index;

{
  /* <Fragment>
      <Navigation menuTabs={menuTabs} openTab={openTab} />
      {enableConfig && (
        <S.WrapperConfigTheme>
          {enableTheme && (
            <S.WrapperThemes>
              <S.ThemePrimary />
              <S.ThemeSecondary onClick={changeActiveTheme("secondary")} />
              <S.ThemeTertiary />
              <S.ThemeQuaternary />
            </S.WrapperThemes>
          )}
          <S.WrapperIcon onClick={toggleEnableTheme}>
            <S.IconCog />
          </S.WrapperIcon>
        </S.WrapperConfigTheme>
      )}
      <S.WrapperLayout>{renderTab(activeTab)}</S.WrapperLayout>
    </Fragment> */
}
