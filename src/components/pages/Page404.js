import { Link, useLocation } from "react-router-dom";
import image from "./gif404.gif";
import "./Page404.css";

const PageNotFound = () => {
  const { pathname } = useLocation();
  //const image = 'gif404.gif'
  return (
    <div className="PageNotFound">
      <img src={image} alt="" />
      <h1 className="t1"> Oooooops 404 Error Page!</h1>
      <h3 className="t2">The page {pathname} cannot be found</h3>
      <Link className="button" to="/" style={{ textDecoration: "blue" }}>
        <p>Go Back Home</p>
      </Link>
    </div>
  );
};
export default PageNotFound;
