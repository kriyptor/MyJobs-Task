import React from "react";
import ModalCards from "./ModalCards";

function Modal({ showModal, setShowModal }) {

    const [jobs, setJobs] = React.useState([]);

    React.useEffect(() => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNxdWFyZWJvYXRAZ21haWwuY29tIiwibmFtZSI6IlJlY3J1aXRlciIsInNraWxscyI6InB5dGhvbiIsInVzZXJSb2xlIjowLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTIyVDEwOjUxOjEzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTIyVDExOjEwOjAyLjAwMFoiLCJpZCI6IjFmMmEzNjYxLTFjM2QtNGIwZi04ZWM0LTE5ZjUzM2ZiOTBmMiIsImlhdCI6MTY0NTQzOTg3M30.xKo_bIJKoCbYDRdcrMKEBv0_Qjt9q2kFqwSBcMK0Jwo"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://jobs-api.squareboat.info/api/v1/recruiters/jobs/3b2e43e6-c20d-4038-a929-0593df468f7f/candidates",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setJobs(result.data))
        .catch((error) => console.log("error", error));

       
    }, []);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 overflow-auto">
            <div className="container mt-6 max-h-min mx-auto max-w-3xl bg-white rounded-md p-4">
              <div className="flex justify-between items-center my-2">
                <h3>Application For This Job</h3>
                <button className="p-2 text-lg font-extrabold" onClick={() => setShowModal(false)}>X</button>
              </div>
              <hr />
              <p className="mt-2">{`Total ${jobs.length} Applications`}</p>
              <div className="my-3 px-1 py-5 mx-auto bg-slate-300 rounded-md">
                <div class="grid grid-cols-2 gap-3">
                    {
                        jobs.map(props => <ModalCards key={props.id} name={props.name} email={props.email} skills={props.skills}/>)
                    }
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
