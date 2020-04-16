import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./home.module.css";


const post = [
    {
      note: "Learn React",
      id: uuidv4(),
    },
    {
      note: "Read a book",
      id: uuidv4(),
    },
    {
      note: "Take a walk",
      id: uuidv4(),
    }
  ];
  
  const Home = () => {
    const [myPost, setMyPost] = useState (post);

    console.log (myPost);

  return (
      <div className= "container mt-3">
        <section className= {styles.h1style}> 
          <h1>Notes App</h1> 
          
        </section>
        <section>
          <input className={styles.inputstyle} type="text" placeholder="Enter your note here..." ></input>
        </section>
        <button className={styles.addbutton}> ADD </button>

        <div className={styles.dummytext}> 
          {myPost.map (p => {
            return (
              <div className="mt-3" key={p.id}> 
                <div>
                  <div className="card"> 
                    <div className= "card-body">
                      <div className="d-flex justify-content-between">
                          {p.note}
                          <button> Delete </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
export default Home;