import React from 'react';
import { useRef  } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { KeyboardArrowRight } from '@mui/icons-material';
import { TabPanel } from './TabPanel';
import { FileItem } from './FileItem';
import { generateDownloadUrl } from './GetFiles';

export function ChildFolders({ folders, rootFolder }) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => setValue(newValue);
    const linkRef = useRef(null);
    
    const _handleDownload = async (filePath, fileName) => {
        const downloadUrl = await generateDownloadUrl(filePath)

        linkRef.current.href = downloadUrl;
        linkRef.current.download = fileName;
        linkRef.current.click();
    }

    return (
        <>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', width: 350, flexShrink: 0 }}
            >
                {folders.map(({ name }, index) => <Tab style={{textTransform: 'none'}} key={`${index}-${name}`} label={name} icon={<KeyboardArrowRight />} iconPosition='end' sx={{ justifyContent: 'space-between', textAlign: 'left' }} />)}
            </Tabs>

            {folders.map(({ name: folderName, files }, index) => (
                <TabPanel key={`tab-${index}-${folderName}`} value={value} index={index} flexGrow={1} >
                    <Box overflow='auto' height='100%' width='100%' p={2} gap={2} display='grid' flexDirection='column' gridTemplateColumns='1fr 1fr' alignContent='start' >
                        {files.map((file, index) => <FileItem key={`file-${index}`} name={file} onDownloadClick={() => _handleDownload(`${rootFolder}/${folderName}/${file}`, file)} />)}
                    </Box>
                </TabPanel>
            ))}
            <a ref={linkRef} target='_blank' style={{ display: "none" }} />
        </>
    );
}