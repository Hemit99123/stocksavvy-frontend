  // need to explicity give types for fontColor 
  interface WorkshopItem {
    img: string;
    title: string;
    fontColor: "white" | "black"; // Union type for fontColor
  }
  

  // Workshop items data array
export const workshopItems: WorkshopItem[] = [
    {
      img: 'https://educationontario.com/app/uploads/2022/04/Photos.jpg',
      title: 'MCMASTER',
      fontColor: 'white'
    },
    {
      img: 'https://www.mbaresearch.org/wp-content/uploads/2024/10/deca-checklist-cover.png',
      title: 'BRAMELA DECA',
      fontColor: 'white'
    },
    {
      img: 'https://www.educationusacanada.ca/wp-content/uploads/2022/01/sat.jpeg',
      title: 'DAILYSAT',
      fontColor: 'black'
    },
    {
      img: 'https://images.stockcake.com/public/1/7/4/174c0bce-6c5d-46f4-a7a0-1e93c2cd00e4_large/stock-exchange-interior-stockcake.jpg',
      title: 'STOCK MARKET',
      fontColor: 'white'
    },
    {
      img: 'https://ocdn.eu/pulscms-transforms/1/FtwktkpTURBXy82M2FlMGVlNjc1YzM0NTBkNWVmNjA2NTIyYzIyM2Y1Zi5qcGeSlQMAL80F3M0DS5MFzQMWzQGu',
      title: 'BUDGETING',
      fontColor: 'black'
    }
  ];
