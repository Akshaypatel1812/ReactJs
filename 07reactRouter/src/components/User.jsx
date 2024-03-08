import { useParams } from "react-router-dom"

export default function User(){
    const {userId}=useParams();
    return (
        <div className="text-3xl bg-slate-600 text-white " >User : {userId}</div>
    )
}