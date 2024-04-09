import { Accordion, AccordionItem, Text } from "@fabric-msft/fluent-react";
import {
  ChevronDown16Regular,
  ChevronUp16Regular,
} from "@fluentui/react-icons";
import { ComponentType } from "react";

type IconProps = {};
type IconType = ComponentType<IconProps>;

interface SideNavProps {
  navItems: NavItem[];
  onNavItemSelect: (id: string) => void;
  currentPage: string;
}

interface NavItem {
  id: string;
  heading: string;
  items: Array<{ text: string; isActive?: boolean; icon: IconType }>;
}

const SideNav: React.FC<SideNavProps> = ({
  navItems,
  onNavItemSelect,
  currentPage,
}) => {
  return (
    <div className="side-nav">
      <Text block weight="bold" size="600">
        <h3>AI Dog</h3>
      </Text>
      <Accordion defaultExpanded={navItems.map((item) => item.id)}>
        {navItems.map((navItem, index) => (
          <AccordionItem
            key={navItem.id}
            block
            expand-icon-position="end"
            size="large"
          >
            <span slot="collapsed-icon">
              <ChevronDown16Regular />
            </span>
            <span slot="expanded-icon">
              <ChevronUp16Regular />
            </span>
            <span slot="heading" className="top-nav">
              {navItem.heading}
            </span>
            {navItem.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`nav-item ${
                  currentPage === item.text ? "active" : ""
                }`}
                onClick={() => onNavItemSelect(item.text)}
              >
                <div className="icon-container">
                  <item.icon />
                </div>
                <span>
                  <a href="#">{item.text}</a>
                </span>
              </div>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SideNav;
