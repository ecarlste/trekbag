type SidebarProps = {
  children: React.ReactNode;
};

function Sidebar({ children }: SidebarProps) {
  return <div className="sidebar">{children}</div>;
}

export default Sidebar;
