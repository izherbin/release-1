import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleContext } from 'components/state/context/toggle-context';
import { DropDown } from 'components/UI/DropDown/DropDown';
import { Fade } from 'utils/transitions';
import { useRegionSelect } from 'hooks/useRegionSelect';
import { useMedia } from 'hooks/useMedia';
import { useFetchData } from 'hooks/useFetchData';

const useStyles = makeStyles(({ palette: { blue, blueLight, secondary }, breakpoints }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    cursor: 'pointer',
    userSelect: 'none',
    border: `1px solid ${blueLight}`,
    '&:hover': {
      transition: '0.3s',
      backgroundColor: '#2D80FF',
      border: 'none',
    },
    '&:hover > *': {
      transition: '0.3s',
      fill: secondary.main,
    },
    [breakpoints.down('sm')]: {
      borderRadius: '0 4px 4px 0',
    },
  },
  svg: {
    fill: blue,
  },
  dropDown: {
    position: 'absolute',
    left: '-1px',
    top: '53px',
    [breakpoints.down('md')]: {
      left: '-260px',
      zIndex: '10',
    },
    [breakpoints.down('sm')]: {
      top: '44px',
      left: '50%',

      transform: 'translate(-140%, 0)',
      zIndex: '10',
    },
  },
}));

export const Filter = ({ regionHandler, regions }) => {
  const { container, svg, dropDown } = useStyles();
  const {
    toggleState: { toggled },
    dispatch,
  } = useContext(ToggleContext);
  const { isSelected, selectHandler } = useRegionSelect(regions, regionHandler);
  const { matchesMobile, matchesTablet } = useMedia();
  const toggleHandler = () => dispatch({});
  const customFunc = (e) => {
    if (matchesMobile || matchesTablet) return [toggleHandler(), regionHandler(e)];
  };

  return (
    // <div className={container}>
    <div className={container} onClick={customFunc}>
      <svg height="15" viewBox="0 0 16 15" width="16" className={svg}>
        <g fillRule="evenodd">
          <path d="m.82604651 2.75348837h1.00837209c.24776427.88104501 1.05129174 1.48977546 1.96651163 1.48977546s1.71874736-.60873045 1.96651163-1.48977546h9.57023254c.308252 0 .5581396-.24988758.5581396-.55813953 0-.30825196-.2498876-.55813954-.5581396-.55813954h-9.56651161c-.24776427-.88104501-1.05129174-1.48977546-1.96651163-1.48977546s-1.71874736.60873045-1.96651163 1.48977546h-1.01209302c-.30825195 0-.55813953.24988758-.55813953.55813954 0 .30825195.24988758.55813953.55813953.55813953zm2.97674419-1.48837209c.51375325 0 .93023256.4164793.93023256.93023256 0 .51375325-.41647931.93023256-.93023256.93023256-.51375326 0-.93023256-.41647931-.93023256-.93023256 0-.51375326.4164793-.93023256.93023256-.93023256z" />
          <path d="m15.3376744 6.84651163h-5.35069766c-.30449546-.78685053-1.06140351-1.30554868-1.90511627-1.30554868-.84371277 0-1.60062082.51869815-1.90511628 1.30554868h-5.35069768c-.30825195 0-.55813953.24988758-.55813953.55813953 0 .30825196.24988758.55813954.55813953.55813954h5.24651163c.18213714.96720731 1.02695554 1.66778472 2.01116279 1.66778472s1.82902565-.70057741 2.01116277-1.66778472h5.2427907c.308252 0 .5581396-.24988758.5581396-.55813954 0-.30825195-.2498876-.55813953-.5581396-.55813953zm-7.25581393 1.6744186c-.51375326 0-.93023256-.4164793-.93023256-.93023256 0-.51375325.4164793-.93023255.93023256-.93023255.51375325 0 .93023255.4164793.93023255.93023255 0 .51375326-.4164793.93023256-.93023255.93023256z" />
          <path d="m15.3376744 12.055814h-1.0083721c-.2477642-.8810451-1.0512917-1.4897755-1.9665116-1.4897755s-1.7187474.6087304-1.9665116 1.4897755h-9.57023259c-.30825195 0-.55813953.2498875-.55813953.5581395 0 .3082519.24988758.5581395.55813953.5581395h9.56651159c.2477643.881045 1.0512918 1.4897755 1.9665117 1.4897755s1.7187473-.6087305 1.9665116-1.4897755h1.012093c.308252 0 .5581396-.2498876.5581396-.5581395 0-.308252-.2498876-.5581395-.5581396-.5581395zm-2.9767442 1.488372c-.5137532 0-.9302325-.4164793-.9302325-.9302325 0-.5137533.4164793-.9302326.9302325-.9302326.5137533 0 .9302326.4164793.9302326.9302326 0 .5137532-.4164793.9302325-.9302326.9302325z" />
        </g>
      </svg>
      {matchesMobile && (
        <Fade in={toggled}>
          <div className={dropDown}>
            {toggled && <DropDown regions={regions} selectHandler={selectHandler} />}
          </div>
        </Fade>
      )}
    </div>
  );
};
