import React, { Component } from 'react'
import firebase from 'firebase'
export default class FetchingData extends Component {

    constructor(props) {
    
        super(props);
       
        this.state = {studentslist : []}
        }
        
      componentDidMount() {
       
       
         
          firebase.database().ref("cosntact").on("value", snapshot => {
            let studentlist = [];
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'students-list' path
                studentlist.push(snap.val());
            });
            this.setState({ studentslist: studentlist });
          });
        
        
     }
     render(){
        return (
          <div className="MainDiv">
            <div class="jumbotron text-center bg-sky">
                <h3>How to show firebase data in reactjs?</h3>
            </div>
          
            <div className="container">
                <table id="example" class="display table">
                  <thead class="thead-dark">
                      <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Message</th>
                      </tr>
                  </thead>
                  <tbody>
                  {this.state.studentslist.map(data => {
                      
                      return (
                          <tr>     
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>{data.message}</td>
                          
                          </tr>
                           );
               
                        })}
                
                       
                    </tbody>
                    
                 </table>
                  
             </div>
            </div>
          );
        }
        }