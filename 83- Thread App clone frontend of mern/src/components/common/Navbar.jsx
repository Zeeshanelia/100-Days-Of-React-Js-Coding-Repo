import { Stack, useMediaQuery } from "@mui/material";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPostModal } from "../../redux/slice";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, myInfo } = useSelector((state) => state.app);
  const isDark = theme === "dark";

  const is300 = useMediaQuery("(min-width:300px)");
  const is700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showArrow, setShowArrow] = useState(false);

  //  Show back arrow only on /post/* routes on large screens
  useEffect(() => {
    setShowArrow(location.pathname.includes("/post/") && is700);
  }, [location.pathname, is700]);

  const handleAddPost = () => dispatch(addPostModal(true));
  const handleNavigateBack = () => navigate(-1);

  const iconSize = is300 ? 32 : 24;
  const iconColor = isDark ? "white" : "black";

  return (
    <Stack
      direction="row"
      maxWidth="100%"
      justifyContent="space-around"
      alignItems="center"
      px={1}
      py={1}
      bgcolor={isDark ? "#121212" : "white"}
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
    >
      {showArrow && (
        <FiArrowLeft
          size={iconSize}
          className="image-icon"
          onClick={handleNavigateBack}
          color={iconColor}
        />
      )}

      <Link to="/" className="link">
        <GoHome size={iconSize} color={iconColor} />
      </Link>

      <Link to="/search" className="link">
        <IoIosSearch size={iconSize} color={iconColor} />
      </Link>

      <TbEdit
        size={iconSize}
        className="image-icon"
        color={iconColor}
        onClick={handleAddPost}
      />

      <CiHeart size={iconSize} color={iconColor} />

      <Link to={`/profile/threads/${myInfo?._id}`} className="link">
        <RxAvatar size={iconSize} color={iconColor} />
      </Link>
    </Stack>
  );
};

export default Navbar;