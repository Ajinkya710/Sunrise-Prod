import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
	const { user, loadingUser } = UserAuth();

	return loadingUser ?
		<Box display='flex' alignItems='center' justifyContent='center' height='100vh'><CircularProgress size='5rem' /></Box>
		:
		(
			!user?.email ?
				<Navigate to='/login' />
				:
				children
		);
};

export default PrivateRoute;
