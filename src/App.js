import React from "react";
import Form from "./Components/Form";
import Modal from "./Components/Modal";
import NavBar from "./Components/NavBar";
import LogoutBtn from "./Components/LogoutBtn";
import HomePage from "./Components/HomePage";
import JobsCards from "./Components/JobsCards";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [logOutBtn, setLogOutBtn] = React.useState(false);
  const [useAuth, setUseAuth] = React.useState(false);
  const [jobdata, setJobdata] = React.useState([]);


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
      "https://jobs-api.squareboat.info/api/v1/recruiters/jobs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setJobdata(result.data["data"]))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-sky-900 h-96">
        <div className="container relative max-w-6xl mx-auto">
          <NavBar
            setLogOutBtn={setLogOutBtn}
            useAuth={useAuth}
          />
          <Routes>
         <Route  path="/" element={<HomePage setUseAuth={setUseAuth}/>}/>
         <Route  path="/login" element={<Form setUseAuth={setUseAuth} />}/>
         <Route  path="/jobs" element={
         <>
          {logOutBtn ? (
            <LogoutBtn setUseAuth={setUseAuth}/>
          ) : null}
         <JobsCards jobdata={jobdata} setShowModal={setShowModal} useAuth={useAuth}/>
         </>
        }/>
         </Routes>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </BrowserRouter>
  );
}

export default App;