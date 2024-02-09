import { Link, useRouteError } from "react-router-dom";

export default function CareerError() {
  const error = useRouteError();

  return (
    <div>
      <h2>Error</h2>
      <p>
        <i>{error.message}</i>
      </p>
      <Link to="/" style={{ color: "white" }}>
        Back To HomePage
      </Link>
    </div>
  );
}
