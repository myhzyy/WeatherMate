- make top container ✅
- cloudy skies section ✅
- weather section ✅
- abstract sections into own components ✅
- create a useContext for api data ✅
- get api data in header ✅
- get api data in WeatherDetails ✅
- get api data in SummaryCard ✅
- get api data in HourlyForecast ✅
- change app background ✅
- add daytime / nighttime ✅
- implement custom hook for updating date/time ✅
- implement search button ✅
- error handing for failed API routes ✅
- create front page routing ✅
- fix temp error handing for main page ✅
- added react router ✅
- added useNavigate to store data in the url rather than useState ✅
- error handling for Weather Page ✅
- add app header with app name ✅
- 14 day tracking pop up (toast) ✅
- Abstract background container ✅
- 7 days track app (real data implementation) ✅
- 7 / 14 days tracking based on user click ✅
- add click on weatherMate brings back to main screen (Link) ✅
- abstract appheader into own utils function ✅
- header times also has weather ✅
- hide apiKey and endpoint within env ✅
- get express local server running ✅
- get city weather api key ✅
- get weather refactor ✅
- add a favourite tab that will store the object of the api location ✅
- quote of the day
- weekly forecast be more clickable
- error handling for Main Page
- front end hosted

---- TO ADD ----

- fix HomePage / change theme button
- render background imaged based on overcase / sunny conditions
- favourites tab
- fact of the day about the city - lightbulb
- Math.round decimels
- readme with features
- add random weather related jokes / quotes - see if its raining cats and dogs typing animation
- HourlyForecast times check ()

// 👷‍♂️ Engineer / Admin users
type User = {
id: string; // primary key
name: string;
role: "engineer" | "admin";
active: boolean;
createdAt: Date;
updatedAt: Date;
isSynced: Record<string, boolean>; // deviceId -> synced
};

// 🧰 Jobs assigned to engineers
type Job = {
id: string; // primary key
customerId: string; // foreign key -> Customer.id
title: string;
type: "installation" | "repair";
locationId: string; // foreign key -> Location.id
assignedTo: string; // foreign key -> User.id
isComplete: boolean;
notes: string;
createdAt: Date;
updatedAt: Date;
isSynced: Record<string, boolean>; // deviceId -> synced
};

// 📍 Job or engineer locations
type Location = {
id: string; // primary key
name: string;
address: string;
createdAt: Date;
updatedAt: Date;
isSynced: Record<string, boolean>; // deviceId -> synced
};

// 🧑‍💼 Customers
type Customer = {
id: string; // primary key
locationId: string; // foreign key -> Location.id
companyName: string;
customerName: string;
active: boolean; // whether they’re still an active client
createdAt: Date;
updatedAt: Date;
isSynced: Record<string, boolean>; // deviceId -> synced
};

supplirs
