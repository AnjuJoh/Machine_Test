import { Box } from "@mui/material";
import Header from "../../components/Header";
import GraphChart from "../../components/GraphChart";

const Graph = () => {
  return (
    <Box m="20px">
      <Header title="Graph Chart" subtitle="Simple Graph Chart" />
      <Box height="75vh">
        <GraphChart />
      </Box>
    </Box>
  );
};

export default Graph;