// practise1:

// const logInUser = (email:string , password:any, cb: any) => {
//     setTimeout(() => {
//         cb(email)
//     }, 2000);
// }
// const getUserVideos =(email:string, callback:any) => {
//     setTimeout(() => {
//         callback(["video1", "vedio2", "vedio3"])
//     }, 3000);
// }
//  logInUser("fatima@gmail.com", 123456, (email:string) => {
//     console.log(email)  
//     getUserVideos(email,(videos:any) =>{
//         console.log(videos)
//     })               // callback hell bolty h qk aik k andr dosry callback use krny ko bolty h.
// })




// practise2:

// setTimeout(() => {
//     console.log("Fatima");
// }, 3000);

// // check result system:

// function checkMarks(marks:number,Cb: any)
// setTimeout(() => {
//     if (marks >= 90){
//     cb();
//     return "congrats";
//     }
// }, 3000);
// function celebrate() {
//     console.log("congrats");
// }
// console.log= checkMarks(98,celebrate);




// promise:
// practise 1:


// function checkMarksPromise (marks:number) {
//     return new Promise((pass, fail) => {
//         setTimeout(()=>{
//             if (marks >= 90){
//                 pass ("congrats");
//             } else {
//                 fail();
//             }
//         } , 3000);
        
//     })
// }
// checkMarksPromise(97)
// .then(() => console.log("congrats"))
// .catch(() => console.log("failure"))

// // practise 2:


// const getMyMarks = () =>{
//     return new Promise((resolve,reject) => {
//         let myMarks = 81
//         if (myMarks >= 80){
//             resolve("A")
//         }else{
//             reject()
//         }
//     })
// }
// getMyMarks().then((grade) =>{
//     console.log(grade)
// })



//  practise:


const logInUserPromise = (email:any,password:any) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(email ==="fatima@gmail.com" && password === 1234){
             resolve(email)
            }else {
                reject ("Wrong email or password")
            }
        },2000);
    })
}

const getVideosPromise =(email:any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email){
            resolve(["video1", "vedio2", "vedio3"])
            }else{
                reject("Please provide your correct email or password")
            }
        }, 1000);
    })
} 
    

logInUserPromise("fatima@gmail.com",1234)
    .then((email)=> {
        console.log(email)
        return getVideosPromise(email)
    })
    .then((videos) => console.log (videos))
    .catch((err) =>{
        console.log(err)
    })


