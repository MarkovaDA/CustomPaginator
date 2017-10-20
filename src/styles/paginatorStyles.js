export const paginatorPreviewStyle = {
  width: '90%',
  height: 'auto',
  margin: '5% 5%',
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