import React from "react"

import MemeMaker from "../components/meme_maker"
import About from "../components/About"
import Process from "../components/Process"
import Resources from "../components/Resources"
import Alert from "../components/Alert"

export default function StartPage(props) {

    const [apiData, setApiData] = React.useState([])
    const [saved, setSaved] = React.useState([])
    const [showAlert, isShowAlert] = React.useState(null)

    const setAlert = (type, text) => {
        isShowAlert({
            type: type,
            message: text
        })
    }

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setApiData(data.data.memes))
    }, []);

    function allSavedMeme(data) {
        console.log(data)
        setSaved(prev => ([
            ...prev, 
            data
        ]))
        setAlert("success", "Meme Has been Saved!")
        setTimeout(() => {
            isShowAlert(
                null
            )
        }, 3000);
    }

    const deleteResource = getId => {
        const newArray = saved.filter(index => index.id !== getId)
        setSaved(newArray);
        setAlert("success", "Meme Has been Deleted")
        setTimeout(() => {
            isShowAlert(
                null
            )
        }, 3000);
    }
    
    return (
        <>
            <MemeMaker apiData={apiData} savedMemes={allSavedMeme}/>
            {saved.length > 0  && 
            <Resources savedData={saved} click={deleteResource}/>
            }
            <About/>
            <Process/>
            {showAlert && 
            <Alert content={showAlert}/>
            }
        </>
    )
}