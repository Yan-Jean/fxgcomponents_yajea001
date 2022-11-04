import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';


export const ChampTexte = ({label, variant, color, defaultValue, helperText}) => {
    return (
      <>
        <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
          <div>
            <TextField
              label={label}
              variant={variant}
              color={color}
              defaultValue={defaultValue}
              helperText={helperText}
              focused
            />
          </div>
        </Box>
      </>
      );
}

ChampTexte.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    defaultValue: PropTypes.string,
    helperText: PropTypes.string
};