import "../Homepage_CSS/Partners.css";

const Partners = () => {
  const partnetsList = [
    {
      name: "Pratham Hospital, Mysore",
      img: "https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6790a409b431b1439b1652b3_pratham%20hospital%20mysore.webp",
    },
    {
      name: "Sardardham Hospital, Ahmedabad",
      img: "https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6790a4097087aee2c10473bb_sardardham%20hospital%2C%20ahmedabad.webp",
    },
    {
      name: "Medanta Hospital",
      img: "https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6790a409a682bd3dc48a9f09_medanta.webp",
    },
    {
      name: "Healthland Clinic",
      img: "https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6790a4094eb16d20c1eb7829_healthland.webp",
    },
    {
      name: "Smile Station",
      img: "https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6790a4097ea3912fb5bcfcdb_smilestation.webp",
    },
    {
      name: "Vaayu Chest & Sleep Specialists",
      img: "https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6790a409e9233d427f636a4a_vaayu.webp",
    },
    {
      name: "Shruta Eye Care Hospital, Bangalore",
      img: "https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6790a409f3e4aa35f7405ad3_shruta%20eye%20care.webp",
    },
    {
      name: "Metropolis",
      img: "https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6790a4099129dbee28c888a7_metropolis.webp",
    },
  ];

  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className="partners-grid">
        {partnetsList.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner-logo-box">
              <img src={partner.img} alt={partner.name} />
            </div>
            <p className="partner-name">{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
