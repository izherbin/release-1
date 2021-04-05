import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { headerEls } from 'components/layout/SearchTable/headerEls';
import { tableElements } from 'components/layout/SearchTable/TableEls/tableElements';
import { LoadingContainer } from 'components/UI/LoadingContainer';

const useStyles = makeStyles(({ palette: { primary, blueLight }, shadows }) => ({
  container: {
    position: 'relative',
    height: '276px',
    borderRadius: '4px',
    marginBottom: '30px',
    backgroundColor: primary.dim,
    boxShadow: shadows.main,
  },
  header: {
    padding: '10px 16px',
    fontSize: '1.2rem',
    borderBottom: `1px solid ${primary.main}`,
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
  },
  textBlock: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '40px',
    width: '130px',
    padding: '0 0 0 16px',
    fontSize: '0.8rem',
    lineHeight: '1',
    color: blueLight,
    borderRight: `1px solid ${primary.main}`,
    borderBottom: `1px solid ${primary.main}`,
  },
  text: {
    maxWidth: '62px',
  },
  icon: {
    position: 'absolute',
    right: '8px',
    bottom: '16px',
  },
  content: {
    height: '40px',
    width: '100%',
    padding: '14px 16px',
    borderBottom: `1px solid ${primary.main}`,
  },
}));

export const SearchTableMobile = ({ items = [], isLoading }) => {
  const [data] = items;
  const [oneItem] = data || [];
  const { container, header, inner, textBlock, text, icon, content } = useStyles();

  const contentObj = tableElements({ ...oneItem });

  const elemetNames = headerEls();

  return (
    <div className={container}>
      <LoadingContainer loading={isLoading} />
      {!isLoading && (
        <Fragment>
          <div className={header}>{contentObj[0]}</div>
          {elemetNames.map((el, i) => (
            <div className={inner} key={`${i}search`}>
              <div className={textBlock}>
                <div className={text}>{el}</div>
                <img src="icons/info.svg" className={icon} />
              </div>
              <div className={content}>{contentObj[i + 1]}</div>
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
};
