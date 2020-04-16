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
    const [myPost, setMyPost] = useState(post);
    const [title, setTitle] = useState("");

    
    const handleChange = (e) => {
      setTitle(e.target.value) 
    }

    const addNote = () => { 
      const newTodo = {
        note: title,
        id: uuidv4(),
      }
      setMyPost([...myPost, newTodo])
      setTitle("")
    }

  return (
      <div className= "container mt-3">
        <section className= {styles.h1style}> 
          <h1>Notes App</h1> 
          
        </section>
        <section>
          <input className={styles.inputstyle} type="text" onChange={handleChange} placeholder="Enter your note here..." ></input>
        </section>
        <button className={styles.addbutton} onClick={addNote}> ADD </button> 

        <div className={styles.dummytext}> 
          {myPost.map (p => {
            return (
              <div className="mt-3" key={p.id}> 
                <div>
                  <div className="card"> 
                    <div className= "card-body">
                      <div className="d-flex justify-content-between">
                          {p.note}
                          <button onClick={() => {
                            setMyPost([...myPost.filter(po => po.id !== p.id)])
                          }}> Delete </button>
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