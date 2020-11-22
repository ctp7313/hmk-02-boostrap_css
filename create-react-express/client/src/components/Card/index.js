import React from "react";
import data from '../components/projects/data.json'
// import {Card} from 'react-bootstrap'

export default function ProjectCard() {
    data.map((data) => {
        return  (
            <div className="card text-white bg-dark mb-3" key={data.id}>
                <div className="card-body">
                    <div className="d-flex w-100 justify-content-between">
                        <h3>{data.title}</h3>
                    </div>
                    <p>{data.desc}</p>
                    <button className="btn btn btn-light"><a className="text-white" href={data.url}>Check it out</a></button>
                </div>
            </div>
        )
      })
}
