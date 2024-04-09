import { useState } from "react";
import SideNav from "./components/Sidenav";
import "./App.css";

import {
  setTheme,
  fabricLightTheme,
  fabricDarkTheme,
} from "@fabric-msft/theme";

import { Switch } from "@fabric-msft/fluent-react";

import {
  AnimalDog20Filled,
  OrganizationHorizontal20Regular,
  StethoscopeRegular,
  Home20Regular,
  TreeEvergreen20Regular,
  HatGraduation20Regular,
} from "@fluentui/react-icons";

const navItems = [
  {
    heading: "General",
    items: [
      { text: "Identity", isActive: true, icon: AnimalDog20Filled },
      { text: "Pedigree", icon: OrganizationHorizontal20Regular },
      { text: "Health", icon: StethoscopeRegular },
    ],
  },
  {
    heading: "Behaviors",
    items: [
      { text: "Household", icon: Home20Regular },
      { text: "Outdoors", icon: TreeEvergreen20Regular },
      { text: "Training", icon: HatGraduation20Regular },
    ],
  },
  {
    heading: "Personality",
    items: [
      { text: "Personality Type", icon: Home20Regular },
      { text: "Emotions", icon: TreeEvergreen20Regular },
      { text: "Habit", icon: HatGraduation20Regular },
    ],
  },
  {
    heading: "Appearance",
    items: [
      { text: "Behaviors", icon: AnimalDog20Filled },
      { text: "Pedigree", icon: OrganizationHorizontal20Regular },
      { text: "Health", icon: StethoscopeRegular },
    ],
  },
  {
    heading: "Vocalization",
    items: [
      { text: "Household", icon: Home20Regular },
      { text: "Outdoors", icon: TreeEvergreen20Regular },
      { text: "Training", icon: HatGraduation20Regular },
    ],
  },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("Identity");
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle the theme state

    if (!isDarkMode) {
      document.body.classList.add("dark-mode-active");
      setTheme(fabricDarkTheme); // Apply the dark theme
    } else {
      document.body.classList.remove("dark-mode-active");
      setTheme(fabricLightTheme); // Apply the light theme
    }
  };
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <SideNav
            navItems={navItems.map((item, index) => ({
              ...item,
              id: `navItem-${index}`,
            }))}
            onNavItemSelect={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className="content"></div>
      </div>
      <Switch
        className="dark-mode-switch"
        content="Dark Mode"
        labelPosition="after"
        name="dark-mode-option"
        checked={isDarkMode}
        onChange={toggleTheme} // Toggle theme on change
      >
        Dark mode
      </Switch>
    </>
  );
}

export default App;
