import React, { useState } from 'react'
import SearchBox from '../../components/SearchBox'
import ItemPricesTable from '../../components/ItemPricesTable'
import Grid from '@material-ui/core/Grid';
import axios from "axios"
import EmailNotificationDialog from '../../components/EmailNotificationDialog'
import "./styles.scss"

export default function PriceMarketView() {
  const [allItemData, setAllItemData] = useState([])
  const [allItemNames, setAllItemNames] = useState([])
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false)
  const [searchBoxState, setSearchBoxState] = useState({
    "region": "",
    "name": "",
    "type": "",
    "minimum_bid":  {
      "operation": '>=',
      'value': 0
    },
    "buy_now_price":  {
      "operation": '>=',
      'value': 0
    },
    "traded_times":  {
      "operation": '>=',
      'value': 0
    },
    "quality":  {
      "operation": '>=',
      'value': 0
    },
    "basic_effect": {
      "Strength":  {
        "operation": '>=',
        'value': 0
      },
      "Dexterity":  {
        "operation": '>=',
        'value': 0
      },
      "Intelligence":  {
        "operation": '>=',
        'value': 0
      },
      "Vitality":  {
        "operation": '>=',
        'value': 0
      },
    },
    "bonus_effect": {
      "Crit":  {
        "operation": '>=',
        'value': 0
      },
      "Specialization":  {
        "operation": '>=',
        'value': 0
      },
      "Domination":  {
        "operation": '>=',
        'value': 0
      },
      "Swiftness":  {
        "operation": '>=',
        'value': 0
      },
      "Endurance":  {
        "operation": '>=',
        'value': 0
      },
      "Expertise":  {
        "operation": '>=',
        'value': 0
      },
    },
    "engraving_effect": {
      "engraving_1" : {
        "name": "",
        "operation": '>=',
        'value': 0
      },
      "engraving_2" : {
        "name": "",
        "operation": '>=',
        'value': 0
      },
      "engraving_3" : {
        "name": "",
        "operation": '>=',
        'value': 0
      },

    }
  })

  const fetchAllItemNames = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_API}/market/get_all_item_names`)
      .then(response => {
        setAllItemNames(response.data)
      })
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    setIsLoading(true)

    const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/market/search_item?page=${page}&per_page=${newPerPage}`, 
      searchBoxState
    )
    setAllItemData(response.data.data)
    setPerPage(newPerPage);
    setIsLoading(false)
  }

  const fetchSearchItem = async page => {
    setIsLoading(true)

    const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/market/search_item?page=${page}&per_page=${perPage}`, 
      searchBoxState
    )
    setAllItemData(response.data.data)
    setTotalRows(response.data.total);
    setIsLoading(false)
  }

  const handlePageChange = page => {
		fetchSearchItem(page);
	};
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        
        <Grid item xs={12} style={{margin: 20}}>
          <SearchBox
            fetchAllItemNames={fetchAllItemNames}
            isLoading={isLoading}
            allItemNames={allItemNames}
            fetchSearchItem={fetchSearchItem}
            searchBoxState={searchBoxState}
            setSearchBoxState={setSearchBoxState}
          />
        </Grid>

        <Grid item xs={12} style={{margin: 20}}>
          <ItemPricesTable
            allItemData={allItemData}
            totalRows={totalRows}
            handlePerRowsChange={handlePerRowsChange}
            handlePageChange={handlePageChange}
            isLoading={isLoading}
          />
          { allItemData==undefined ? (
            <EmailNotificationDialog searchBoxState={searchBoxState}/>
          ): <></>
          }      
        </Grid>
      </Grid>
    </>
  )
}
