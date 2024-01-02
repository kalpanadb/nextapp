"use client"
import { useState } from 'react';
import UpDrawer from '@/ui-component/upDrawer/UpDrawer';

const DrawerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <button onClick={handleDrawerOpen}>Open Drawer</button>
      <UpDrawer
        title="Drawer"
        open={isDrawerOpen}
        onClick={handleDrawerClose}
      >
        <p>Drawer open</p>
      </UpDrawer>
    </div>
  );
};

export default DrawerMenu;
