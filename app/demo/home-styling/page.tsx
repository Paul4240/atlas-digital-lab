export default function InteriorStylingConcept() {
  return (
    <main style={{fontFamily:"Arial, sans-serif",background:"#f6f4f1"}}>

      {/* HERO */}
      <section style={{
        padding:"120px 20px",
        textAlign:"center",
        backgroundImage:"url(https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000)",
        backgroundSize:"cover",
        backgroundPosition:"center",
        color:"white"
      }}>

        <div style={{
          background:"rgba(0,0,0,0.55)",
          padding:"60px",
          borderRadius:"12px",
          maxWidth:"900px",
          margin:"auto"
        }}>

          <h1 style={{fontSize:"56px",marginBottom:"20px"}}>
            Luxury Interior Styling
          </h1>

          <p style={{fontSize:"20px",lineHeight:"1.6"}}>
            Thoughtfully designed interiors that transform everyday spaces into
            elegant, magazine-worthy homes.
          </p>

          <button style={{
            marginTop:"30px",
            padding:"14px 30px",
            fontSize:"18px",
            border:"none",
            borderRadius:"8px",
            background:"#ffffff",
            color:"#111",
            cursor:"pointer"
          }}>
            Book Consultation
          </button>

        </div>
      </section>


      {/* SERVICES */}

      <section style={{padding:"80px 20px",maxWidth:"1100px",margin:"auto"}}>

        <h2 style={{textAlign:"center",fontSize:"38px",marginBottom:"50px"}}>
          Interior Styling Services
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"30px"
        }}>

          <div style={card}>
            <h3>Full Home Styling</h3>
            <p>Complete interior styling creating cohesive, elevated spaces throughout your home.</p>
          </div>

          <div style={card}>
            <h3>Room Styling</h3>
            <p>Transform a single space into a beautifully styled and functional environment.</p>
          </div>

          <div style={card}>
            <h3>New Build Selections</h3>
            <p>Expert guidance selecting finishes, fixtures, materials and design direction.</p>
          </div>

        </div>

      </section>


      {/* IMAGE FEATURE */}

      <section style={{
        backgroundImage:"url(https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000)",
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"420px"
      }}>
      </section>


      {/* PORTFOLIO */}

      <section style={{padding:"80px 20px",background:"white"}}>

        <h2 style={{textAlign:"center",fontSize:"38px",marginBottom:"50px"}}>
          Featured Projects
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          maxWidth:"1100px",
          margin:"auto"
        }}>

          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" style={img}/>
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200" style={img}/>
          <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200" style={img}/>
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200" style={img}/>

        </div>

      </section>


      {/* PROCESS */}

      <section style={{padding:"80px 20px",maxWidth:"1100px",margin:"auto"}}>

        <h2 style={{textAlign:"center",fontSize:"38px",marginBottom:"50px"}}>
          Our Process
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"30px"
        }}>

          <div style={card}>
            <h3>Consultation</h3>
            <p>We understand your vision, style preferences, and goals for your space.</p>
          </div>

          <div style={card}>
            <h3>Design Planning</h3>
            <p>A curated styling plan including layout, furnishings, and décor direction.</p>
          </div>

          <div style={card}>
            <h3>Transformation</h3>
            <p>Your space becomes a polished, cohesive interior you’ll love living in.</p>
          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}

      <section style={{padding:"80px 20px",background:"#ece7df"}}>

        <h2 style={{textAlign:"center",fontSize:"38px",marginBottom:"50px"}}>
          Client Experiences
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"30px",
          maxWidth:"1100px",
          margin:"auto"
        }}>

          <div style={card}>
            <p>“The transformation was incredible. Our home finally feels complete.”</p>
          </div>

          <div style={card}>
            <p>“Working with a professional stylist made our renovation stress-free.”</p>
          </div>

          <div style={card}>
            <p>“Every detail was thoughtfully designed. We love our home again.”</p>
          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section style={{padding:"100px 20px",textAlign:"center"}}>

        <h2 style={{fontSize:"40px",marginBottom:"20px"}}>
          Ready to Elevate Your Home?
        </h2>

        <p style={{fontSize:"18px",marginBottom:"30px"}}>
          Schedule a design consultation and start creating a space that feels truly refined.
        </p>

        <button style={{
          padding:"16px 36px",
          fontSize:"18px",
          border:"none",
          borderRadius:"8px",
          background:"#111",
          color:"white",
          cursor:"pointer"
        }}>
          Book Consultation
        </button>

      </section>


      {/* FOOTER */}

      <footer style={{
        background:"#111",
        color:"white",
        textAlign:"center",
        padding:"40px"
      }}>
        <p>Luxury Interior Styling Concept</p>
        <p>Design Consultation Available</p>
      </footer>

    </main>
  );
}


const card = {
  background:"white",
  padding:"30px",
  borderRadius:"10px",
  boxShadow:"0 5px 20px rgba(0,0,0,0.08)"
}

const img = {
  width:"100%",
  borderRadius:"10px"
}