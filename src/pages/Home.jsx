import React from "react";



function Home() {
  return (
    <>
     <img src="/companylogo.png" 
     style={{ 
          width: "100%",        // Makes the image responsive in width
          height: "566px",      // Fixed height of 566px
          objectFit: "contain"  // Ensures the image maintains its aspect ratio
        }}  alt="EdTech Logo"  />
      
   
      
    </>
  );
}

export default Home;
