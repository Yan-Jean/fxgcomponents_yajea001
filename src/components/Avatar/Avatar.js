import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export const Avatars = ({alt, src, width, height}) => {
    return (
      <>
        <Stack>
            <Avatar
                alt={alt}
                src={src}
                sx={{ width: {width}, height: {height} }}
            />
        </Stack>
      </>
      );
}

Avatars.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.Int,
    height: PropTypes.Int
};