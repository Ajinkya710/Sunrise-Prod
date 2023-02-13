import { DownloadForOffline, InsertDriveFile } from "@mui/icons-material";
import { Card, CardHeader, IconButton } from "@mui/material";
import { Box } from "@mui/system";

export const FileItem = ({ name, onDownloadClick }) => (
	<Box flexShrink={0} height='100%'>
		<Card sx={{height: '100%'}} elevation={3}>
			<CardHeader
				avatar={<InsertDriveFile color="action" />}
				title={name}
				action={<IconButton onClick={onDownloadClick} color='warning'>
					<DownloadForOffline />
				</IconButton>}
			/>	
		</Card>
	</Box>
)