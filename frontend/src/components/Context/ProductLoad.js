import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Contextdata = createContext();


function ProductLoad({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/getAllProducts")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  
  }

  return <Contextdata.Provider value={data}>{children}</Contextdata.Provider>;
}

export default ProductLoad;
