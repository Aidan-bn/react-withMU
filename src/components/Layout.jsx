import { Create, Preview,  } from "@mui/icons-material"
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"

const Layout = ({ children }) => {
    const menuItems = [
        { 
            text: 'Create Note', 
            icon: <Create />, 
            path: '/create' 
        },
        { 
            text: 'View Notes', 
            icon: <Preview />,
            path: '/notes'
        }
    ]

    const navigate = useNavigate();
    const location = useLocation();
    const widthFix = 240;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', display: 'flex' }}>
        <Drawer
        variant="permanent"
        anchor="left"
        style={{
          width: widthFix,
        }}
      >
        <Typography variant="h6" sx={{ padding: 2 }}>
          My Notes App
        </Typography>
        <List>
            {menuItems.map((item) => {
                return (
                    <ListItem 
                    button 
                    key={item.text}
                    onClick={() =>  navigate(item.path) }
                    style={{ 
                        backgroundColor: location.pathname === item.path ? '#f3f3f3' : 'transparent',
                    }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                )
            })}
        </List>
      </Drawer>
      <main>{children}</main>
    </div>
  )
}

export default Layout
