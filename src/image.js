import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
    return (
        <ImageList s>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            <ImageListItem >
                <img
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                />
                {/* <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                        >
                            <InfoIcon />
                        </IconButton>
                    }
                /> */}
            </ImageListItem>
        </ImageList>
    );
}
