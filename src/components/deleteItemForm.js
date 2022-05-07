import { useState } from "react";
import { AuthContext } from "../App";
import React from 'react';
import axios from 'axios';
import { render } from "@testing-library/react";

export default function DeleteItemForm() {
  const { state } = React.useContext(AuthContext);

  const [name, getname] = useState(null);
  const [itemId, deleteItemName] = useState(null);
  const [omgWork, setomgWork] = useState({});

  const submitForm = (event) => {
    event.preventDefault();
    let dataArray = new FormData();
    let data = {};
    dataArray.append('tradeitemId', itemId);
    dataArray.append('_id', name);
    dataArray.forEach((key, value) => data[value] = key);
    const config = {
      headers: {
        "Authorization": "Bearer " + state.token
      }
    }

    axios.get("https://damp-fjord-26738.herokuapp.com/api/userstore/trades/" + state.userStore, config)
          .then(res => {
            const plswork = res.data.itemsForTrade.find(item => item.name.toLowerCase() === itemId.toLowerCase());
            setomgWork(plswork);
          });
          
    axios.delete("https://damp-fjord-26738.herokuapp.com/api/tradeitems/" + omgWork.id, config)
          .then(res => {
          console.log(res);
        });

    

  }

  return (
    <div>

      <form className="" onSubmit={submitForm}>

        <input
          type="text"
          onChange={(e) => deleteItemName(e.target.value)}
          placeholder={"item name"}

        />
        <input className="uploadfrmt" type="submit" />
      </form>

    </div>
  );

}
