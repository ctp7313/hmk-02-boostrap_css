import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Header from '../components/Header';
import data from '../components/projects/data.json'
import {Container} from '../components/Grid/'

const  project = data.map((data) => {
  return  (
        <div className="card text-white mb-4" key={data.id}>
                <div className="card-body">
                  <img  className="img-fluid rounded mx-auto d-block" 
                        src={data.image}
                        alt={data.title} 
                        style={{  height: 300, 
                                  clear: "both", 
                                  paddingBottom: 10}} />
                  <div className="d-flex w-100 justify-content-between">
                    <h3>{data.title}</h3>
                  </div>
                  <p>{data.desc}</p>
                  <button className="btn btn btn-primary"><a className="text-white" href={data.url}>Site</a></button>
                  <button className="btn btn btn-primary"><a className="text-white" href={data.github}>Code</a></button>

                </div>
              </div>
  )
})

export default function Portfolio() {
  return(
    <>
      <div className="container container-fluid">
        <Header headerName={"Portfolio"} subLine={"Current & Past Projects"}/>
      </div>
      <Container>
        <CardColumns> {project} </CardColumns> 
      </Container>
    </>
  )
}
