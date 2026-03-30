export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  phone: string;
  email: string;
  rating: string;
  experience: string;
  availability: string;
}

export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Ben Ali",
    specialty: "General Medicine",
    image: "https://i.pinimg.com/1200x/e5/dd/e5/e5dde58c4b111ef191c2e596931454cc.jpg",
    phone: "+216 71 123 456",
    email: "sarah.benali@doctime.com",
    rating: "4.9",
    experience: "12 years",
    availability: "Mon - Fri, 09:00 - 17:00"
  },
  {
    id: 2,
    name: "Dr. Mohamed Trabelsi",
    specialty: "Cardiology",
    image: "https://i.pinimg.com/1200x/80/26/d9/8026d9718e9b92b214080941b3bbc6c4.jpg",
    phone: "+216 71 234 567",
    email: "mohamed.trabelsi@doctime.com",
    rating: "4.8",
    experience: "15 years",
    availability: "Tue - Sat, 10:00 - 18:00"
  },
  {
    id: 3,
    name: "Dr. Layla El Ghazali",
    specialty: "Dermatology",
    image: "https://i.pinimg.com/736x/a0/4c/ed/a04ced80a5986ae4e71b5c4fffe22731.jpg",
    phone: "+216 71 345 678",
    email: "layla.elghazali@doctime.com",
    rating: "4.7",
    experience: "8 years",
    availability: "Mon - Thu, 08:00 - 16:00"
  },
  {
    id: 4,
    name: "Dr. Ahmed Mansour",
    specialty: "Pediatrics",
    image: "https://i.pinimg.com/736x/3a/f3/30/3af3302af6caed799eadaadbccb47a39.jpg",
    phone: "+216 71 456 789",
    email: "ahmed.mansour@doctime.com",
    rating: "4.9",
    experience: "10 years",
    availability: "Mon - Fri, 09:00 - 17:00"
  },
  {
    id: 5,
    name: "Dr. Nadia Slimani",
    specialty: "Neurology",
    image: "https://i.pinimg.com/1200x/e9/a8/02/e9a802ade54476c47f4f91403158ece4.jpg",
    phone: "+216 71 567 890",
    email: "nadia.slimani@doctime.com",
    rating: "4.8",
    experience: "20 years",
    availability: "Wed - Sun, 09:00 - 15:00"
  },
  {
    id: 6,
    name: "Dr. Karim Hedi",
    specialty: "Orthopedics",
    image: "https://i.pinimg.com/736x/2b/67/ea/2b67eab2f47654a38614999133170c4c.jpg",
    phone: "+216 71 678 901",
    email: "karim.hedi@doctime.com",
    rating: "4.6",
    experience: "14 years",
    availability: "Mon - Fri, 10:00 - 19:00"
  },
  {
    id: 7,
    name: "Dr. Sofia Rossi",
    specialty: "Ophthalmology",
    image: "https://i.pinimg.com/1200x/2b/69/70/2b69702946f68629d106be4121ba0a59.jpg",
    phone: "+216 71 789 012",
    email: "sofia.rossi@doctime.com",
    rating: "4.9",
    experience: "11 years",
    availability: "Tue - Sat, 08:30 - 17:30"
  },
  {
    id: 8,
    name: "Dr. Omar Farooq",
    specialty: "Psychiatry",
    image: "https://i.pinimg.com/1200x/80/26/d9/8026d9718e9b92b214080941b3bbc6c4.jpg",
    phone: "+216 71 890 123",
    email: "omar.farooq@doctime.com",
    rating: "4.7",
    experience: "18 years",
    availability: "Mon - Thu, 11:00 - 20:00"
  },
  {
    id: 9,
    name: "Dr. Elena Moretti",
    specialty: "Gastroenterology",
    image: "https://i.pinimg.com/1200x/8c/e3/b5/8ce3b50c0a1bfc1a7f59a7d09466f2ff.jpg",
    phone: "+216 71 901 234",
    email: "elena.moretti@doctime.com",
    rating: "4.8",
    experience: "13 years",
    availability: "Fri - Mon, 09:00 - 17:00"
  }
];
