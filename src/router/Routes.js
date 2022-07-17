import React from 'react' 
import { Switch } from 'react-router-dom' 
import { BasicLayout} from '../layouts' 
import PublicRoute from './PublicRoute' 
import { PriceMarketView } from '../views' 


const Routes = () => {
  return (
    <Switch>
      <PublicRoute
        exact
        path="/"
        layout={BasicLayout}
        component={PriceMarketView}
      />
      {/* <PublicRoute
        exact
        path="/support"
        layout={BasicLayout}
        component={SupportView}
      /> */}
    </Switch>
  ) 
} 

export default Routes 
