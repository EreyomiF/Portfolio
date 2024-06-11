// Layout.js

import React from 'react';
import ScrollIndicator from './Scroll';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {children}
      <ScrollIndicator />
    </div>
  );
};

export default Layout;
