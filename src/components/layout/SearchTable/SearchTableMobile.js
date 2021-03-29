import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { modPrice } from 'utils/modPrice';
import { TableGrowth } from 'components/layout/SearchTable/TableEls/TableGrowth';
import { TableAnomaly } from 'components/layout/SearchTable/TableEls/TableAnomaly';
import { TableDifficulty } from 'components/layout/SearchTable/TableEls/TableDifficulity/TableDifficulty';
import { TableSave } from 'components/layout/SearchTable/TableEls/TableSave/TableSave';

const useStyles = makeStyles(({ palette: { primary, blueLight, blue }, shadows }) => ({
  container: {
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

export const SearchTableMobile = ({ data = [] }) => {
  const [oneItem = {}] = data;
  const { container, header, inner, textBlock, text, icon, content } = useStyles();

  const { niche, volume, trend } = oneItem;

  const contentObj = [
    niche,
    modPrice(volume),
    <TableGrowth data={{ growth: '+15%' }} />,
    trend,
    <TableAnomaly data={{ anomaly: [10, 10] }} />,
    <TableDifficulty data={{ difficulty: 4.5 }} />,
    <TableSave />,
  ];
  const elemetNames = [
    'Объем рынка',
    'Рост за год',
    'Сезонность',
    'Аномалии',
    'Сложность запуска',
    'Сохраненные',
  ];

  return (
    <div className={container}>
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
    </div>
  );
};
