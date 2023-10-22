import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box";

function renderRow(props) {
  const { index, style, data } = props;
  const item = data[index];
  console.log(item);
  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      sx={{ color: "black", bgcolor: "background.paper" }}
    >
      <ListItemButton href={`/product/${item.ID}/${item.category}`}>
        <ListItemText primary={`${item.Name.substr(0, 30)}`} />
      </ListItemButton>
    </ListItem>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [name, setname] = useState("");
  const [data1, setdata] = useState([]);


  useEffect(() => {
    if (name === "") {
      setdata([]);
      return;
    }
    const data = {
      search: name,
    };

    axios
      .post("/search", data)
      .then((response) => {
        setdata(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  const handleChange = (e) => {
    setname(e.target.value);
  };

  return (
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={name}
          onChange={handleChange}
        />
      </Search>

      {data1.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 99,
            top: 50,
            right: 75,
            width: "100%",
            height: 400,
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <FixedSizeList
            height={400}
            width={360}
            itemSize={46}
            itemCount={data1.length}
            overscanCount={5}
            itemData={data1}
          >
            {renderRow}
          </FixedSizeList>
        </Box>
      )}
    </Toolbar>
  );
}
