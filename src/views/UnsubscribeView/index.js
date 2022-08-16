import React, {useEffect} from 'react'
import axios from "axios"
import "./styles.scss"
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';


export default function UnsubscribeView() {
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const id = query.get('id')

  const deleteEmailAlert = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_API}/market/delete_email_alert?alert_id=${id}`)
  }

  useEffect(() => {
    deleteEmailAlert()
  }, [])

  return (
    <>
      <Typography variant="h6" style={{color: 'white', margin: 10}} >Alert unsubscribed</Typography>
    </>
  )
}
