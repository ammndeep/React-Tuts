//& This is way to fetchData from API using useLoaderData() hook of react-router-dom

import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const career = useLoaderData();

  return (
    <div className="careers">
      {career.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <div className="career-section">
            <h3>{career.title}</h3>
            <h3>{career.salary}</h3>
            <h3>{career.location}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const careersLoader = async () => {
  const result = await fetch("http://localhost:4000/careers");

  if (!result.ok) {
    throw Error("Could not find the Page");
  }
  return result.json();
};

//? using useState and UseEffect Hook to fetch Data form API

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Careers() {
//   const [careers, setCareers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/careers");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         console.log(data);
//         setCareers(data);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {careers.map((career) => (
//         <Link to="/" key={career.id}>
//           <h2>{career.title}</h2>
//           <h3>{career.salary}</h3>
//           <p>{career.location}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }
