import { useMedia } from 'hooks/useMedia';

export const headerEls = () => {
  const { matchesMobile } = useMedia();
  const elemetNames = [
    '#',
    'Название отрасли / ниши',
    'Объем рынка',
    'Рост за год',
    'Сезонность',
    'Аномалии',
    'Сложность запуска',
    'Сохраненные',
  ];

  const generateNames = (() => {
    if (matchesMobile) return elemetNames.slice(2);

    return elemetNames;
  })();

  return generateNames;
};
