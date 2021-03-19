import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoadingIndicator } from 'components/UI/LoadingIndicator/LoadingIndicator';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
  spinnerContainer: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff9',
    borderRadius: '22px',
    zIndex: 10,
  },
  loadingSpinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export const LoadingContainer = ({ loading }) => {
  const { container, spinnerContainer, loadingSpinner } = useStyles();

  return (
    <div className={container}>
      {loading && (
        <div className={spinnerContainer}>
          <div className={loadingSpinner}>
            <LoadingIndicator />
          </div>
        </div>
      )}
    </div>
  );
};
