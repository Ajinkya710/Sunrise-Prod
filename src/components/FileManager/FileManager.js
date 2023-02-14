import React from 'react';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { getFiles, getFolders } from './GetFiles';
import { ChildFolders } from './ChildFolders';
import { TabPanel } from './TabPanel';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const FileManager = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => setValue(newValue);
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        getFolders('/').then(async (rootFolders) => {
            const res = await Promise.all(rootFolders.map(async (rootFolder) => {
                var childFolders = await getFolders(rootFolder)
                childFolders=childFolders.reverse()
                const files = await Promise.all(childFolders.map(async (childFolder) => {
                    const files = await getFiles(`${rootFolder}/${childFolder}`)
                    return { name: childFolder, files }
                }))
                return { name: rootFolder, childFolders: files }
            }))

            //res = [{name: rootFolder, childFolders: [{name: 'folder1', files: []}]}]
            setFolders(res);
        }).catch(err => console.error(err));
    }, []);

    return (
        <Paper variant="outlined">
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                height='50vh'
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', flexShrink: 0, selected:'#10609e' }}
                >
                    {folders.map(({ name }, index) => <Tab style={{textTransform: 'none',color:'#10609e'}} key={`${index}-${name}`} label={name} {...a11yProps(index)} icon={<KeyboardArrowRight />} iconPosition='end' sx={{ justifyContent: 'space-between' }} />)}
                </Tabs>

                {folders.map(({ name, childFolders }, index) => (   
                    <TabPanel key={`tab-${index}-${name}`} value={value} index={index} >
                        {/* {name} */}
                        <ChildFolders rootFolder={name} folders={childFolders} />
                    </TabPanel>
                ))}

            </Box>
        </Paper>
    )
}