import { modPrice } from 'utils/modPrice';
import { TableGrowth } from 'components/layout/SearchTable/TableEls/TableGrowth';
import { TableAnomaly } from 'components/layout/SearchTable/TableEls/TableAnomaly';
import { TableSeason } from 'components/layout/SearchTable/TableEls/TableSeason';
import { TableDifficulty } from 'components/layout/SearchTable/TableEls/TableDifficulity/TableDifficulty';
import { TableSave } from 'components/layout/SearchTable/TableEls/TableSave/TableSave';
import { TableIndex } from 'components/layout/SearchTable/TableEls/TableIndex';
import { useMedia } from 'hooks/useMedia';

export const tableElements = (
  { niche, volume, trend, growth } = {},
  isPage = 1,
  index = 0,
  ...data
) => {
  const { matchesMobile } = useMedia();
  const contentObj = [
    niche,
    modPrice(volume),
    <TableGrowth growth={growth} />,
    <TableSeason trend={trend} />,
    <TableAnomaly data={data} />,
    <TableDifficulty data={data} />,
    <TableSave />,
  ];

  const generateNames = (() => {
    if (!matchesMobile) return [<TableIndex isPage={isPage} index={index} />, ...contentObj];

    return contentObj;
  })();

  return generateNames;
};
