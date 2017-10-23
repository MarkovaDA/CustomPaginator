export  const paginatorWrapperStyle = {
  width: '90%',
  height: 'auto',
  margin: '5% 5%',
};
export const tilePreviewStyle = {
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start'
};

export const tileBehaviourStyle = {
  '@media (max-width: 1020px)': {
    medium: {
      width: '45% !important'
    },
  },
  '@media (max-width: 600px)': {
    small: {
      width: '100% !important'
    }
  }
};

export const tileStyle = (tileWidth) => {
  return {
    position:'relative',
    width: `${tileWidth}%`,
    height: 'auto',
    margin: '5px'
  }
};

export const pageSwitcherStyle = {
  'position':'relative',
  'width':'100%',
  'height': 'auto',
  'margin': '5px',
  'display': 'flex',
  'justifyContent': 'center'
};

export const switcherUnitStyle = {
  'width': 'auto',
  'height': 'auto',
  'cursor': 'pointer'
};

export const pageIconStyle = {
  normal: {
    'width': 'auto',
    'height': 'auto',
    'cursor': 'pointer'
  },
  selection: {
    'borderTop': '2px solid #8b00ff',
    'backgroundColor': 'lavender'
  }
};