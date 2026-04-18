import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToSearchedUsers, setLoading } from "../../redux/slice";
import { Bounce, toast } from "react-toastify";

const SearchInput = () => {
  const { theme } = useSelector((state) => state.app);
  const isDark = theme === "dark";

  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  //  Dummy search using fetch
  const handleSearch = async (e) => {
    if (query.trim() && e.key === "Enter") {
      dispatch(setLoading(true));

      try {
        // Replace this with real API if needed
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = await res.json();

        // Filter users by query
        const filteredUsers = data.filter((u) =>
          u.name.toLowerCase().includes(query.toLowerCase())
        );

        dispatch(addToSearchedUsers(filteredUsers));

        toast.success(
          filteredUsers.length
            ? `${filteredUsers.length} user(s) found`
            : "No users found",
          {
            position: "top-center",
            autoClose: 2500,
            theme: "colored",
            transition: Bounce,
          }
        );
      } catch (error) {
        toast.error("Search failed", {
          position: "top-center",
          autoClose: 2500,
          theme: "colored",
          transition: Bounce,
        });
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <TextField
      sx={{
        width: "90%",
        maxWidth: "750px",
        boxShadow: "5px 5px 5px gray",
        borderRadius: "15px",
        px: 2,
        py: 1,
        my: 5,
        mx: "auto",
        "& .MuiOutlinedInput-root": {
          color: isDark ? "whitesmoke" : "black",
          "& fieldset": { border: "none" },
        },
      }}
      placeholder="search user..."
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{ color: isDark ? "whitesmoke" : "black" }}
          >
            <FaSearch />
          </InputAdornment>
        ),
      }}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyUp={handleSearch}
    />
  );
};

export default SearchInput;