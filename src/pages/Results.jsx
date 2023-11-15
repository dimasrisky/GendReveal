import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import ResultFinished from "../components/ResultFinished"


const Results = () => {
  const { username } = useParams()
  const [ dataGender, setDataGender ] = useState()
  useEffect(()=> {
    fetch(`https://api.genderize.io?name=${username}`)
      .then(res => res.json())
      .then(data => setDataGender(data))
  }, [])
  console.log(dataGender)

  return (
    <>
      {dataGender? <ResultFinished dataGender={dataGender} /> : <Loading />}
    </>
  )
}

export default Results