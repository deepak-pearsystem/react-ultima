import React from 'react';
import Carousel from './Carousel'
import CoOwnership from './CoOwnership';
import Threelayout from './Threelayout';
import OurStable from './OurStable';
import LatestAuction from './LatestAuction';
import Winner from './Winner';
import BestView from './BestView';


class Home extends React.Component{

	render(){
		return (
			<React.Fragment>
				<Carousel/>
				<CoOwnership/>
				<Threelayout />
				<OurStable/>
        <LatestAuction/>
        <Winner/>
        <BestView/>
			</React.Fragment>
		)
	}
}

export default Home;