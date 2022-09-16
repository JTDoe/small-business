import { connect } from 'react-redux';
import ListingDetails from '../components/ListingDetails';

const mapStateToProps = (state) => {
	return {
		listings: state.listings,
	};
};

export default connect(mapStateToProps)(ListingDetails);