tailwind.config = {
    theme: {
      extend: {
        maxWidth: {
            container: '1320px',
          },

        colors: {
          cntcbg: '#6A4DF4',
          overlybl: 'rgba(0, 0, 0, 0.7)',
          overlybll: 'rgba(0, 0, 0, 0.317)',
           border: 'rgba(0, 0, 0, 1)',                           
        },
        fontFamily: {
          inter:  'Inter',
      },
      backgroundImage: {
      bannerimg: "url('./images/bannerimg.png')",       
      },
      lineHeight: {
        bannerh1lh: '1.2',
        
      },
      boxShadow: {
        shadow: '0 0px 30px -15px rgba(0, 0, 0, 0.9)',
      },
      

    }
  }
}