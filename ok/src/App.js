import "./App.css";
import Products from "./pages/Products";
const filters = [
  {
    id: "job roles",
    name: "Job Roles",
    options: [
      { value: "core", label: "Core" },
      { value: "non core", label: "Non Core" },
      // { value: "blue", label: "Blue" },
    ],
  },
  {
    id: "graduation year",
    name: "Graduation Year",
    options: [
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
      { value: "2022", label: "2022" },
      { value: "2021", label: "2021" },
      { value: "2020", label: "2020" },
    ],
  },
  {
    id: "department",
    name: "Department",
    options: [
      { value: "Architecture", label: "Architecture" },
      { value: "Biomedical", label: "Biomedical" },
      { value: "Biotechnology", label: "Biotechnology" },
      { value: "Civil", label: "Civil" },
      { value: "Chemical", label: "Chemical" },
      { value: "Computer Science", label: "Computer Science" },
      { value: "Electrical", label: "Electrical" },
      { value: "Electrical and Communications", label: "Electronics and Communications" },
      { value: "Information Technology", label: "Information Technology" },
      { value: "Metallurgy and Material Science", label: "Metallurgy and Material Science" },
      { value: "Mechanical", label: "Mechanical" },
      { value: "Mining", label: "Mining" },
    ],
  },
];

const products = [
  {
    id: "Rudronil Dey",
    year: "2023",
    dept: "Mining",
    href: "https://www.linkedin.com/in/rudronil-dey-440a38218",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4D03AQGk61BpwENHnw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719020970102?e=1736985600&v=beta&t=gCtTBs02nT-86BO-Q4djz7epOFSTYFOl-lKdQjrkVps",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    job: "core",
  },
  {
    id: "Lakshman Mulchandani",
    year: "2024",
    dept: "Electrical",
    href: "https://www.linkedin.com/in/lakshmanmulchandani/",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4D03AQEjz6fC_LEOzA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715089656555?e=1736985600&v=beta&t=HiuqPwaI_bUqRVpaTN2k5uhczZvt40BfDIl5FTk75I4",

    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    job: "non core",
  },
  {
    id: "Muskan Gautam",
    year: "2022",
    dept: "Civil",
    href: "https://www.linkedin.com/in/muskan-gautam-88429818b/",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4D03AQFmpKPUU7-Sng/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705092896018?e=1736985600&v=beta&t=G66e83mEpkD4DupmtoQMeXL2MxNO3OiLtGsaUGEflDQ",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    job: "non core",
  },
  {
    id: "Rohit Agarwal",
    year: "2020",
    dept: "IT",
    href: "https://www.linkedin.com/in/rohit-agarwal-711b82111/",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQGcJty3pP7dkQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646103855808?e=1736985600&v=beta&t=gUOaVt0LH4K9gthb4afkyaEpkW3Fo4hIlODUta681f4",

    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    job: "core",
  },

  {
    id: "Shriyansh Gaur",
    year: "2024",
    dept: "Computer Science",
    href: "https://www.linkedin.com/in/shriyansh-gaur-82b969a6/",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D5603AQG9eyTDnmLPyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708979161590?e=1736985600&v=beta&t=S_dTVvN3AwIkpM2ebttv2IbcBCnh7oqVTmHGbTtZBtQ",

    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    job: "core",
  },

  {
    id: "Ritwick Kumar Mandal",
    year: "2024",
    dept: "Mechanical",
    href: "https://www.linkedin.com/in/ritwick-kumar-mandal-791b20213/",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4D03AQEkPoIeWv3zhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721970244632?e=1736985600&v=beta&t=C7WC0OIaNxXzrvgO94aRzIvOS23DrKPupaPAscBAECQ",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    job: "core",
  },

  // More products...
];
function App() {
  return (
    <div>
      <Products products={products} filters={filters} />
    </div>
  );
}

export default App;
