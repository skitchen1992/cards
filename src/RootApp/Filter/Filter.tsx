import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Grid from '@mui/material/Grid';

interface IFilter {
  isFilter: boolean;
  onSetFilter: () => void;
}

const Filter: React.FC<IFilter> = (props) => {
  const { isFilter, onSetFilter } = props;
  return (
    <Grid container justifyContent="flex-end" onClick={() => onSetFilter()}>
      <Grid item>
        {isFilter ? (
          <FilterAltIcon sx={{ cursor: 'pointer' }} color="error" />
        ) : (
          <FilterAltOffIcon sx={{ cursor: 'pointer' }} color="error" />
        )}
      </Grid>
    </Grid>
  );
};

export default Filter;
