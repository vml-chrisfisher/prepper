import React from 'react';
import { Router} from '@reach/router'
import PrivateRoute from '../components/routes/PrivateRoute';

const Settings = () => <p>Settings</p>
const Billing = () => <p>Billings</p>

const Household = () => (
    <></>
    // <Router>
    //     <PrivateRoute path="/household/shipments" component={Settings}/>
    //     <PrivateRoute path="/household/groceries" component={Billing}/>
    //     <PrivateRoute path="/household/preferences" component={Billing}/>
    //     <PrivateRoute path="/household/billing" component={Billing}/>
    // </Router>
)

export default Household