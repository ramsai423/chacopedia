import { put}from "redux-saga/effects";
import{
    getchoclatesuccess,getchoclatefailure, getbrandsuccess,getbrandfailure, getchoclatedetailssuccess, getchoclatedetailsfailure,getbranddetailssuccess,getbranddetailsfailure}from"../ActionCreaters/ChoclatesCreaters";
import { getloginsuccess, getsignupsuccess,getsignupfailure, getsearch, getsearchfailure, getsearchsuccess} from "../ActionCreaters/LoginCreaters";
    

export default function *getchoclatesaga(){
    try{
        let choclatesResponse = yield fetch(`http://localhost:4000/chocolates`);
        let chocoles = yield choclatesResponse.json();
        yield put(getchoclatesuccess(chocoles));
        }catch(err){
            yield put(getchoclatefailure(err));
            
        }
    };
        export  function *getbrandsaga(){
        try {
            
            let brandResponse = yield fetch(`http://localhost:4000/brands`);
            let brands = yield brandResponse.json();
            yield put(getbrandsuccess(brands));
            }catch(err){
                yield put(getbrandfailure(err));

        }
}
export  function *getchoclatedetailssaga(action){
    try {
        
        let choclatedetailsResponse = yield fetch(`http://localhost:4000/chocolates/${action.id}`);
        let cdetailss = yield choclatedetailsResponse.json();
        yield put(getchoclatedetailssuccess (cdetailss));
        }catch(err){
            yield put(getchoclatedetailsfailure(err));

    }
}
export  function *getbranddetailssaga(action){
    try {
        
        let branddetailsResponse = yield fetch(`http://localhost:4000/chocolates?brandId=${action.id}`);
        let branddetails = yield branddetailsResponse.json();
        yield put(getbranddetailssuccess(branddetails));
        }catch(err){
            yield put(getbranddetailsfailure(err));

    }
}
export  function *getloginusers(action){
    try {
        
        let loginusersResponse = yield fetch(`http://localhost:3000/users?email=${action.email}&password=${action.pwd}`);
        let loginusers = yield loginusersResponse.json();
        if(loginusers.length){
        yield put(getloginsuccess(loginusers));
        }
        else
        {
            throw("plese enter valid users")
        }
    }catch(err){
            alert(err);

    }
}
export  function *postusers(action){
    alert("post");
    try {
        let postData ={
            firstName:action.firstName,
            lastName:action.lastName,
            email:action.emailAddress,
            password:action.password
        }

        let postResponse = yield fetch(`http://localhost:3000/users`,{
            method:"POST",
            body:JSON.stringify(postData),
            headers:{
                "Content-Type":"application/json"
            }
        });
        let postedData = yield postResponse.json();
        yield put(getsignupsuccess(postedData));
        
    }catch(err){
        yield put(getsignupfailure(err));

    }
}
export function *getsearchdata({searchName}){
    try{
        let searchResponse = yield fetch(`http://localhost:4000/chocolates`);
        const chocos = yield searchResponse.json();
        let matchdata = [];
        matchdata = chocos.filter(choco =>{
            return choco.name.toLowerCase().includes(searchName)
        })
        yield put(getsearchsuccess(matchdata));
        }catch(error){
            yield put(getsearchfailure(error))
        }
    }
