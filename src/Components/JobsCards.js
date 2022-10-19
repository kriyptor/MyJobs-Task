import React from 'react'
import Card from "./Card";
import Pages from "./Pages";

function JobsCards({ jobdata, setShowModal}) {
  return (
    <>
         <div className="container mt-12 mx-auto max-w-6xl">
                <div class="grid grid-cols-4 gap-3">  
                  {jobdata.map((props) => (
                    <Card
                      key={props.createdAt}
                      title={props.title}
                      location={props.location}
                      description={props.description}
                      setShowModal={setShowModal}
                    />
                  ))}
                </div>
              </div>
              <Pages />
    </>
  )
}

export default JobsCards