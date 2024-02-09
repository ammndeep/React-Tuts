import { useLoaderData, useParams } from "react-router-dom";

export default function CareersDetail() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <>
      <h1>Details of The Employees</h1>
      <div className="career-section">
        <h3>{career.title}</h3>
        <h3>{career.salary}</h3>
        <h3>{career.location}</h3>
      </div>
    </>
  );
}

//loader function

export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;
  const result = await fetch("http://localhost:4000/careers/" + id);
  if (!result.ok) {
    throw Error("Could not find the Page");
  }
  return result.json();
};
