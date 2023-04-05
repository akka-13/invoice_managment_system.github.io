import React, { useEffect } from "react";
import axios from "axios";
import {useState} from "react";
import {getData}from "../services/data";
import { render } from "react-dom";
import './mygrid.css';
import images from './abc.jpeg';
import image2 from './highradius.jpeg';
import {makeStyles, requirePropFactory } from "@material-ui/core";
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import {MDBBtn,MDBBtnGroup} from "mdb-react-ui-kit";
import { border, margin } from "@mui/system";
import {nanoid} from'nanoid';
import { Contacts } from "@material-ui/icons";
function MyGrid(){

const[addFormData,setAddFormData]=useState({
    busisness_code:'',
    customer_number: '',
    clear_date: '',
    business_year:'',
    document_id:'',
    posting_date:'',
    document_create_date:'',
    due_date:'',
    invoice_currency:'',
    document_type:'',
    posting_id:'',
    t_open_amount:'',
    baseline_create_date:'',
    c_payment_terms:'',
    invoice_id:''


})  


const[value,setValue]=useState("");
const[modal,setModal]=useState(false);   
const[modal2,setmodal]=useState(false); 
const[modal3,setMOdal]=useState(false); 
const [apiData, setApiData] = useState([]);
const url="http://localhost:8080/highraduis-project/Data";

useEffect(() => {
	axios.get(url)
	.then((resp) => setApiData(resp.data.actors));
}, [url])
 console.log( apiData);

 const toggleModal=() =>{
     setModal(!modal)
 }
 const toggleModal1=() =>{
    setmodal(!modal2)
}

const toggleModal2=() =>{
    setMOdal(!modal3)
}


 if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if(modal2) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if(modal3) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const handleReset =() =>{

  }
  const handleSearch = async(e) =>{
    


  }
 

 
 
    
 

 
  
    return(
        
        
        
 
        
        <div style={{backgroundColor:"#20232A",margin:"0"}}>
            
            
        <div>
            <div style={{display:"block",backgroundColor:"#1C1F25"}}>
            <div style={{
                     margin:"auto",
                     
                     
                     alignContent:"center"
                 }} >
                <img src={images} height={50} width={200}></img>
                <img style={{marginLeft:"500px"}} className="image" src={image2} height={50} width={200} margin left={60}></img>
            </div>
            <div>
                <h2>Invoice List</h2>
            </div>
            </div>
         </div>
         <div>
             <div style={{display:"inline",margin:"auto"}}className="btn-group">
                 <button className="button1" >PREDICT</button>
                 <button className="button1">ANALYTICS VIEW</button>
                 <button className="button1">ADVANCED SEARCH</button>
                 <form style={{
                     margin:"auto",
                     padding:"15px",
                     maxWidth:"400px",
                     alignContent:"center"
                 }} className="d-flex input-group w-auto"
                 onSubmit={handleSearch}>
                     <input style={{padding:"6px 6px",borderRadius:"7px"}}type="text" className="form-control" placeholder="Search Customer Id" value={value} onChange={(e) =>setValue(e.target.value)}></input>
                         
                         <button style={{ color: "white",
    border:"1px solid gray",
    padding:"8px 8px 8px 8px",
    marginLeft:"10px",
    borderRadius:"7px",
    backgroundColor:"black"}}>Search</button>
                         <button style={{ color: "white",
    border:"1px solid gray",
    padding:"8px 8px 8px 8px",
    marginLeft:"10px",
    borderRadius:"7px",
    backgroundColor:"black"}} className="mx-2" color="info" onClick={() =>handleReset()}>Reset</button>
                         

                 </form>
                 <button className="btn-modal"style={{borderRadius:"7px",marginLeft:"1200px"}}  onClick={toggleModal} >Add</button>
                 <button className="btn-modal" style={{borderRadius:"7px",marginLeft:"20px"}} onClick={toggleModal1} >Edit</button>
                 <button className="btn-modal" style={{borderRadius:"7px",marginLeft:"20px"}} onClick={toggleModal2} >Delete</button>
                 </div>
                 
                 { modal && (
                     <div className="modal">
                     <div className="overlay"></div>
                     <div className="modal-content">
                         <p style={{color:"white"}}>Add</p><br></br>
                         <input style={{padding:"6px 6px"}}type="text" id="fname" name="busisness_code" placeholder="Business Code"></input>
                         <input style={{padding:"6px 6px",marginLeft:"40px"}}type="text" id="fname" name="customer_number" placeholder="Customer Number" ></input>
                         <input  style={{padding:"6px 6px",marginLeft:"40px"}}class="textbox-n"type="date" id="fname" value="01-25-2022" name="clear_date" placeholder="Clear date"></input><br></br>
                         <input style={{padding:"6px 6px",marginTop:"30px"}}type="text" id="fname"  name="business_year" placeholder="Business Year"></input>
                         <input style={{padding:"6px 6px",marginLeft:"40px"}}type="text" id="fname"  name="document_id" placeholder="Document id"></input>
                         <input  style={{padding:"6px 6px",marginLeft:"40px"}}class="textbox-n"type="date" id="fname" value="01-25-2022" name="posting_date" placeholder="Posting date"></input>
                         <input  style={{padding:"6px 6px",marginTop:"30px",marginLeft:"40px"}}class="textbox-n"type="date" id="fname" value="01-25-2022" name="document_create_date" placeholder="Document create  date"></input>
                         <input  style={{padding:"6px 6px",marginLeft:"40px"}}class="textbox-n"type="date" id="fname" value="01-25-2022" name="due_date" placeholder="Due date"></input>
                         <input style={{padding:"6px 6px",marginLeft:"40px"}}type="text" id="fname"  name="invoice_currency" placeholder="Invoice currency "></input>
                         <input style={{padding:"6px 6px",marginLeft:"40px"}}type="text" id="fname"  name="document_type" placeholder="Document type"></input>
                         <input style={{padding:"6px 6px",marginTop:"30px",marginLeft:"40px"}}type="text" id="fname"  name="posting_id" placeholder="Posting id"></input>
                         <input style={{padding:"6px 6px",marginLeft:"40px"}}type="text" id="fname"  name="t_open_amount" placeholder="Total open amount"></input>
                         <input  style={{padding:"6px 6px",marginLeft:"40px"}}class="textbox-n"type="date" id="fname" value="01-25-2022" name="baseline_create_date" placeholder="Baseline create date"></input>
                         <input style={{padding:"6px 6px",marginTop:"30px",marginLeft:"40px"}}type="text" id="fname"  name="c_payment_terms" placeholder="Customer Payment terms"></input>
                         <input style={{padding:"6px 6px",marginLeft:"40px"}}type="text" id="fname"  name="invoice_id" placeholder="Invoice id"></input>
                         <div>
                         <button style={{backgroundColor:"#20232a",border:"1px solid white",color:"white"}} className="close-modal" onClick={toggleModal}>ADD</button>
                        
                         </div>
                     </div>
                 </div>

                 )}
                 { modal2 && (
                     <div className="modal">
                     <div className="overlay"></div>
                     <div className="modal-content2">
                         <p style={{color:"white"}}>Edit</p><br></br>
                        
                         <input style={{padding:"6px 6px",marginTop:"30px"}}type="text" id="fname"  name="c_payment_terms" placeholder="Invoice Currency"></input>
                         <input style={{padding:"6px 6px",marginLeft:"40px"}}type="text" id="fname"  name="invoice_id" placeholder="Customer Payment Terms"></input>
                         <div>
                         <button style={{backgroundColor:"#20232a",border:"1px solid white",color:"white"}} className="close-modal" onClick={toggleModal1}>EDIT</button>
                        
                         </div>
                     </div>
                 </div>

                 )}
                 { modal3 && (
                     <div className="modal">
                     <div className="overlay"></div>
                     <div className="modal-content3">
                         <p style={{color:"white"}}><strong>Delete</strong></p><br></br>
                         <p style={{color:"white"}}>Are you sure you want to delete the record(s)?</p>
                         <div>
                         <button style={{backgroundColor:"#20232a",border:"1px solid white",color:"white"}} className="close-modal" onClick={toggleModal2}>Delete</button>
                        
                         </div>
                     </div>
                 </div>

                 )}
                 
             
             
            
         </div>
     
      
        
        
        
       
        
       
        {
            
            
            
        
        <table style={{color:"white"}}className="text-center" >
            <thead >
            <input type="checkbox"></input>
                <th>Sl_no</th>
                <th>Business_code</th>
                <th>Cust_number</th>
                <th>Clear_date</th>
                <th>Buisness_year</th>
                <th>Doc_id</th>
                <th>Posting_date</th>
                <th>Document_create_date</th>
                <th>Document_create_date1</th>
                <th>Due_in_date</th>
                <th>Invoice_currency</th>
                <th>Document_type</th>
                <th>Posting_id</th>
                <th>Area_business</th>
                <th>Baseline_create_date</th>
                <th>Total_open_amount</th>
                <th>Cust_payment_terms</th>
                <th>Invoice_id</th>
                <th>Aging_bucket</th>
            </thead>
            <tbody>
                {apiData.map(actor =>(
                    <tr>
                        <input type="checkbox"></input>
                        <td>{actor.sl_no}</td>
                        <td>{actor.business_code}</td>
                        <td>{actor.cust_number}</td>
                        <td>{actor.clear_date}</td>
                        <td>{actor.buisness_year}</td>
                        <td>{actor.doc_id}</td>
                        <td>{actor.posting_date}</td>
                        <td>{actor.document_create_date}</td>
                        <td>{actor.document_create_date1}</td>
                        <td>{actor.due_in_date}</td>
                        <td>{actor.invoice_currency}</td>
                        <td>{actor.document_type}</td>
                        <td>{actor.posting_id}</td>
                        <td>{actor.area_business}</td>
                        <td>{actor.baseline_create_date}</td>
                        <td>{actor.total_open_amount}</td>
                        <td>{actor.cust_payment_terms}</td>
                        <td>{actor.invoice_id}</td>
                    </tr>
                ))} 
            </tbody>
        </table> } 
        <div style={{paddingTop:"10px",paddingBottom:"10PX",textAlign:"center",backgroundColor:"#1C1F25"}}>
            <h4 style={{color:"white"}}><strong style={{color:"blue"}}>Privacy Policy</strong>|2022 Highradius Corporation.All Rights Reserved</h4>
            </div> 
        </div>
        
        
    
    

 
 
 );
                }

                
    
    

export default MyGrid;