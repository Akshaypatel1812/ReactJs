import { useEffect, useState } from "react"

export default function GitHubPage(){
    const [data,setData]=useState([]);
         useEffect(()=>{

            fetch('https://api.github.com/users/Akshaypatel1812')
            .then((response)=>{
                return response.json();
            }).then((jsonData)=>{
                setData(jsonData);
            })
         },[])
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <img src={data.avatar_url} alt="centered image" className="width={250} h-auto mb-4" />
        <p className="text-2xl font-bold">GitHub Followings:{data.following}</p>
      </div>
    )
}