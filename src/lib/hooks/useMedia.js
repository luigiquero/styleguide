import useMediaQuery from 'react-use-media-query-hook';

// TODO: atualmente temos esse breakpoint de `mobile`
// sendo duplicado a logica entre esse arquivo e o
// src/lib/styles/breakpoints.scss, devemos encontrar
// uma maneira de manter esses limites centralizados
// em somente um local, uma ideia seria utilizar
// CSS-in-JS para resolver isto
const queriesByBreakpoint = {
  mobile: '(max-width: 1023px)',
};

const useMedia = (breakpoint) => {
  const mediaQuery = queriesByBreakpoint[breakpoint];

  if (!mediaQuery) {
    throw new TypeError(`'${breakpoint}' is a invalid breakpoint.`);
  }

  return useMediaQuery(mediaQuery);
};

export default useMedia;
