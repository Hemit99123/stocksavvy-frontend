interface Person {
  name: string;
  img: string;
  role: string;
}

interface WorkshopItem {
  img: string;
  title: string;
  slug: string;
  fontColor: "white" | "black"; // Union type for fontColor
  date: string;
  people: Person[]; // Array of people associated with the workshop
}

export const workshopItems: WorkshopItem[] = [
    {
      img: 'https://educationontario.com/app/uploads/2022/04/Photos.jpg',
      title: 'MCMASTER',
      slug: "mcmaster",
      fontColor: 'white',
      date: "November 28 2024",
      people: [
        { name: "John Doe", img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", role: "Instructor" },
        { name: "Jane Smith", img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", role: "Coordinator" }
      ]
    },
    {
      img: 'https://www.mbaresearch.org/wp-content/uploads/2024/10/deca-checklist-cover.png',
      title: 'BRAMELA DECA',
      slug: "bramela_deca",
      fontColor: 'white',
      date: "December 7 2024",
      people: [
        { name: "Alice Brown", img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", role: "Speaker" },
        { name: "Mark Lee", img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", role: "Organizer" }
      ]
    },
    {
      img: 'https://www.educationusacanada.ca/wp-content/uploads/2022/01/sat.jpeg',
      title: 'DAILYSAT',
      slug: "dailysat",
      fontColor: 'black',
      date: "December 21 2024",
      people: [
        { name: "Sam Wilson", img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", role: "Tutor" }
      ]
    },
    {
      img: 'https://images.stockcake.com/public/1/7/4/174c0bce-6c5d-46f4-a7a0-1e93c2cd00e4_large/stock-exchange-interior-stockcake.jpg',
      title: 'STOCKS',
      slug: "stocks",
      fontColor: 'white',
      date: "December 14 2024",
      people: [
        { name: "Olivia Green", img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", role: "Financial Analyst" }
      ]
    },
    {
      img: 'https://ocdn.eu/pulscms-transforms/1/FtwktkpTURBXy82M2FlMGVlNjc1YzM0NTBkNWVmNjA2NTIyYzIyM2Y1Zi5qcGeSlQMAL80F3M0DS5MFzQMWzQGu',
      title: 'BUDGETING',
      slug: "budgeting",
      fontColor: 'black',
      date: "December 2 2024",
      people: [
        { name: "Ethan Scott", img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", role: "Budget Consultant" }
      ]
    }
  ];
  
