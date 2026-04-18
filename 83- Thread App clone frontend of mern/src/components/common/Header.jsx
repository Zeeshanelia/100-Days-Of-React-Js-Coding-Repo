import { Grid, Stack, useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainMenu } from "../../redux/slice";

const Header = () => {
  const { theme } = useSelector((state) => state.app);
  const isDark = theme === "dark";

  const _700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();

  const handleOpenMenu = (e) => {
    dispatch(toggleMainMenu(e.currentTarget));
  };

  return (
    <>
      {_700 ? (
        <Stack
          flexDirection="row"
          height={52}
          justifyContent="space-around"
          alignItems="center"
          position="sticky"
          top={0}
          py={1}
          bgcolor={isDark ? "#121212" : "white"}
          zIndex={10}
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        >
          <img
            src={isDark ? "/Threads-logo-black-bg.webp" : "/Threads-logo-white-bg.png"}
            alt="logo"
            width={60}
            height={isDark ? 50 : 35}
          />

          <Stack
            justifyContent="center"
            width="550px"
            bgcolor={isDark ? "" : "aliceblue"}
            zIndex={2}
            height={96}
          >
            <Navbar />
          </Stack>

          <IoMenu
            size={36}
            className="image-icon"
            color="gray"
            onClick={handleOpenMenu}
          />
        </Stack>
      ) : (
        <>
          <Stack
            position="fixed"
            bottom={0}
            justifyContent="center"
            width="100%"
            height={52}
            p={1}
            bgcolor={isDark ? "#121212" : "aliceblue"}
            zIndex={10}
          >
            <Navbar />
          </Stack>

          <Grid
            container
            height={60}
            justifyContent="flex-end"
            alignItems="center"
            p={1}
          >
            <Grid item xs={6}>
              <img
                src="/Threads-logo-white-bg.png"
                alt="logo"
                width={60}
                height={35}
              />
            </Grid>
            <IoMenu
              size={36}
              className="image-icon"
              color="gray"
              onClick={handleOpenMenu}
            />
          </Grid>
        </>
      )}
    </>
  );
};

export default Header;