import Cards from './components/Cards'
import React from 'react' 
// import { Bookmark } from "lucide-react";

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://policyviz.com/wp-content/uploads/2020/12/amazon-logo-square.jpg",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/os-systems/apple-400crthiqdql2xp1h3vb.png/apple-gcdk0hadgcwu2g3gs9vq3n.png?_a=DATAiZAAZAA0",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://policyviz.com/wp-content/uploads/2020/12/amazon-logo-square.jpg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_0h7lxDlOMZFOcl1Ae4CU7uRUxHmGI0IEg&s",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$85",
    location: "Remote, India"
  },
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/microsoft-logo-png-hd-11660471230b6nd5n6huh.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70",
    location: "Noida, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/020/336/484/small/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/41/73/6f/41736f27da5ce3b65fe481f8f0410a3a.jpg",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "GPU Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKG9q1CSlce9wrSB-I1sd9Q66pJsaNlbJRg&s",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40",
    location: "Delhi, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Salesforce",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70",
    location: "Chennai, India"
  }
];

  return (
    <div className='parent'>
      {/* <Cards img="https://policyviz.com/wp-content/uploads/2020/12/amazon-logo-square.jpg" company="Amazon" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://4kwallpapers.com/images/wallpapers/nvidia-logo-dark-2048x2048-9996.jpg" company="NVIDIA" days="6" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/os-systems/apple-400crthiqdql2xp1h3vb.png/apple-gcdk0hadgcwu2g3gs9vq3n.png?_a=DATAiZAAZAA0" company="Apple" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://toppng.com/uploads/preview/microsoft-logo-png-hd-11660471230b6nd5n6huh.png" company="Microsoft" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://thumbs.dreamstime.com/b/google-logo-white-background-vector-format-available-google-logo-124289805.jpg" company="Google" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg" company="Meta" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://pbs.twimg.com/profile_images/784468765027110912/tavuddvl_400x400.jpg" company="Broadcom" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://policyviz.com/wp-content/uploads/2020/12/amazon-logo-square.jpg" company="Amazon" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://4kwallpapers.com/images/wallpapers/nvidia-logo-dark-2048x2048-9996.jpg" company="NVIDIA" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" />
      <Cards img="https://thumbs.dreamstime.com/b/google-logo-white-background-vector-format-available-google-logo-124289805.jpg" company="Google" days="5" designation="Senior UI/UX Designer" type="Senior Level" salary="$1200" location="Mumbai, India" /> */}

      {jobOpenings.map(function(elem){
        return <Cards img={elem.brandLogo} company={elem.companyName} days={elem.datePosted} designation={elem.post} tag1={elem.tag1} type={elem.tag2} salary={elem.pay} location={elem.location} />
      })}
    </div>
  )
}

export default App
