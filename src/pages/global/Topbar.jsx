import { Box, IconButton, Input, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";


import SearchIcon from "@mui/icons-material/Search";
import person from '../../assets/Rectangle 10.png';


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" >
       
      <Box
        display="flex" width={90} height={45}
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        
        
      ></Box>
      
        <IconButton>
        
          <img src={person} alt=""/>
        </IconButton>
      </Box>
     
    </Box>
    
  );
  
};

export default Topbar;