import React, { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Fitlog from '../components/FItlog';
import server_url from '../services/server_url'
import { updateProfile } from '../services/allApis';
import { toast } from 'react-toastify';


function Profile() {

    const [user,setUser]=useState({
        id:"",username:"",email:"",password:"",weight:"",height:""
    })

    const [existingProfile,setExistingProfile]=useState("")
    const [preview,setPreview]=useState("")
      
    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            const userDetails=JSON.parse(sessionStorage.getItem('userDetails'))
            console.log(userDetails);
            setUser({id:userDetails._id,username:userDetails.username,email:userDetails.email,password:userDetails.password
                ,weight:userDetails.weight,height:userDetails.height,profile:""})

              setExistingProfile(userDetails.profile)  
        }
    },[])

    useEffect(()=>{
             if(user.profile){
                 setPreview(URL.createObjectURL(user.profile))
             }
             else{
                setPreview("")
             }
    },[user.profile])

    console.log(user);

    const handleProfileUpdate=async()=>{
        console.log(user);
        const {username,password,email,weight,height,profile}=user
        if(!username || !password || !email || !weight || !height ){
            toast.warning("Enter Valid Inputs!!")
        }
        else{
            
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("weight", weight);
        formData.append("height", height);
        preview ? formData.append("profile", profile) : formData.append("profile", existingProfile);

        const header = {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": preview ? "multipart/form-data" : "application/json"
        }
        const result=await updateProfile(header,formData)
        console.log(result);
        if(result.status==200){
            toast.success("Profile Updated Successfully")
            sessionStorage.setItem("userDetails",JSON.stringify(result.data))
        }
        else{
            toast.error(result.response.data)
        }
        }

    }
    return (

        <>

        <Fitlog/>
        <div className='p-5 '
          style={{
            height: '100vh',
            backgroundImage: `url('https://wallpapercave.com/wp/wp9438589.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Center items vertically
            flexDirection: 'column', // Align items in a column
         }}
        
        >
            <div className=' text-center '>
                <h2 className='shadow' style={{color:'var(--dark-red'}}>Profile</h2>

               
            </div>
          <div className='d-flex justify-content-center align-items-center '>
          <div className='me-2 mt-5 text-center p-4'    >
                    <label>
                        <input type="file" id="profileInput" onChange={(e)=>setUser({...user,profile:e.target.files[0]})} style={{ display: 'none' }} />
                        {

                            existingProfile==""?
                            <img
                            className='img-fluid mb-3'
                            style={{ height: '180px',width:'180px',borderRadius:'50%' ,border:'3px solid var(--dark-red)'}}
                            src={preview?preview:"https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png"}
                            alt="profile"
                        />
                        :
                        <img  className='img-fluid mb-3' style={{ height: '180px',width:'180px',borderRadius:'50%' }} src={preview?preview:`${server_url}/uploads/${existingProfile}`} alt="" />

                        }
                       
                    </label>

                    
                    <FloatingLabel className='mb-3 mt-4' controlId="username" label="Username"  >
                        <Form.Control type="text" placeholder="Username" value={user?.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="weight" label="Weight in Kg">
                        <Form.Control type="text" placeholder="Your weight" value={user?.weight} onChange={(e)=>setUser({...user,weight:e.target.value})}/>
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="height" label="Height in cm">
                        <Form.Control type="text" placeholder="Height " value={user?.height} onChange={(e)=>setUser({...user,height:e.target.value})}/>
                    </FloatingLabel>
                    <div className=' mt-3'>
                        <button
                            className='btn btn-block text-white'
                            style={{ backgroundColor: 'var(--dark-red)' }}
                            onClick={handleProfileUpdate}
                        >
                            Update
                        </button>
                    </div>
                </div>
          </div>
              
        </div>
        
        </>
        
    );
}

export default Profile;