import { useState } from "react";
import SideNav from "./components/Sidenav";
import "./App.css";

import {
  setTheme,
  fabricLightTheme,
  fabricDarkTheme,
  Theme,
} from "@fabric-msft/theme";

import {
  webLightTheme,
  teamsLightTheme,
  webDarkTheme,
  teamsDarkTheme,
} from "@fluentui/react-components";

import { Switch, Tabs, Tab, TabPanel } from "@fabric-msft/fluent-react";

import {
  AnimalDog20Filled,
  OrganizationHorizontal20Regular,
  StethoscopeRegular,
  Home20Regular,
  TreeEvergreen20Regular,
  HatGraduation20Regular,
} from "@fluentui/react-icons";

import {
  Identity,
  Training,
  Pedigree,
  Personality,
  Default,
} from "./pages/Pages";

import { Select } from "@fluentui/react-components";
import FormField from "./components/FormField";

setTheme(fabricLightTheme);

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
  const pageMapping = {
    Identity: <Identity />,
    Pedigree: <Pedigree />,
    Training: <Training />,
    "Personality Type": <Personality />,
    Default: <Default />,
  };

  const [currentTheme, setCurrentTheme] = useState("Fabric");

  const themes: { [key: string]: Theme[] } = {
    Fabric: [fabricLightTheme, fabricDarkTheme],
    Web: [webLightTheme, webDarkTheme],
    Teams: [teamsLightTheme, teamsDarkTheme],
  };

  const changeTheme = (
    event: React.ChangeEvent<HTMLSelectElement>,
    data: { value: string }
  ) => {
    setCurrentTheme(data.value);
    setTheme(themes[data.value as keyof typeof themes][isDarkMode ? 1 : 0]);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(themes[currentTheme as keyof typeof themes][!isDarkMode ? 1 : 0]);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("Identity");
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
        <div className="content">
          <Tabs>
            <Tab role="tab" id="firstTab">
              Basic
            </Tab>
            <Tab role="tab" id="secondTab">
              Advanced
            </Tab>

            <TabPanel id="firstTabPanel">
              {" "}
              {pageMapping[currentPage as keyof typeof pageMapping] || (
                <Default />
              )}
            </TabPanel>
            <TabPanel id="secondTabPanel">Advanced</TabPanel>
          </Tabs>
        </div>
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

      <FormField label="Select a theme" id="theme-select">
        <Select
          defaultValue={currentTheme as string} // Use defaultValue prop
          onChange={changeTheme}
        >
          {Object.keys(themes).map((theme) => (
            <option key={theme}>{theme}</option>
          ))}
        </Select>
      </FormField>
    </>
  );
}

export default App;
