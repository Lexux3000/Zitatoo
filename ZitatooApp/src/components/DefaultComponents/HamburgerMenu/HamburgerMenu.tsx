import {
  Menu,
  IconButton,
} from "@chakra-ui/react";

const HamburgerIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);

const HamburgerMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton 
          aria-label="Menu Options"
          variant="outline"
        >
          <HamburgerIcon />
        </IconButton>
      </Menu.Trigger>
      <Menu.Positioner>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default HamburgerMenu;