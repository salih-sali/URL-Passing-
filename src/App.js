import React, { useState } from 'react'

function App() {
    const [choose,setChoose]=useState("")
    const [choose2,setChoose2]=useState("")//initiating choose2 as null
    const [choose3,setChoose3]=useState("")

    const handle= async (e) => {
           console.log("__"+choose)
           const url ='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q='  +choose+ '&btnG='
           window.open(url); //new tab
         // window.location.href =url ; //same window reload cheyyan
    }
    const handle2= async (e) => {
        console.log("__"+choose)
        
        const url ='https://www.google.com/search?q='  +choose2
         //window.open(url); //new tab
          window.location.href =url ; //same window reload cheyyan
 }

 const handle3= async (e) => {
    console.log("__"+choose)
    
    const url1 ='https://www.google.com/search?q='  +choose3
    const url='https://www.scopus.com/results/authorNamesList.uri?sort=count-f&src=al&sid=c2623b7d81c5b6c13b56b38f232518c7&sot=al&sdt=al&sl=20&s=AUTHLASTNAME%28'+choose3+'%29&st1='+choose3+'&orcidId=&selectionPageSearch=anl&reselectAuthor=false&activeFlag=true&showDocument=false&resultsPerPage=20&offset=1&jtp=false&currentPage=1&previousSelectionCount=0&tooManySelections=false&previousResultCount=0&authSubject=LFSC&authSubject=HLSC&authSubject=PHSC&authSubject=SOSC&exactAuthorSearch=false&showFullList=false&authorPreferredName=&origin=searchauthorfreelookup&affiliationId=&txGid=40694e9b93d6bdf7d18a4a0e07cf9b9f'
    window.open(url); //new tab
     // window.location.href =url ; //same window reload cheyyan
}
 

  return (
    
    <div>
        <br/>
        <h1>URL PASSING</h1>
<br/><br/>
&nbsp;&nbsp;enter book title to search on google Scholar (redirect to new tab) : &nbsp;
<input onChange={event => setChoose(event.target.value)} />&nbsp;&nbsp;&nbsp;
<button onClick={handle}>search on Scholar</button>
<br/><br/>
&nbsp;&nbsp;enter name to google search (redirect in same tab) :&nbsp;
<input onChange={event => setChoose2(event.target.value)} />&nbsp;&nbsp;&nbsp;
<button onClick={handle2}>google search</button>
<br/><br/>
&nbsp;&nbsp;enter name of author to search on scopus (redirect to new tab) :&nbsp;
<input onChange={event => setChoose3(event.target.value)} />&nbsp;&nbsp;&nbsp;
<button onClick={handle3}>search on scopus</button>

    </div>
  )
}

export default App


//     console.log(title)
// const qw =(e) => {
//     e.preventDefault()
//     console.log("sdcvhnm,")
//     //location.href = 'http://www.google.com';
//     const url ='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q='  +{title}+ '&btnG='
//     window.open(url);}