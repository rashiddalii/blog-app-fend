import { useState } from "react";

function CTA({title,color,para="This is the default message"}) {

  const [count,setCount] = useState(0)

  function handleCount(){
    setCount( c => c + 1)
  }

  return (
    <>
      <button style={{color}} > {title}</button>
      <p>{para}</p>
      <button onClick={handleCount}>Like</button>
      <span>Like count: {count}</span>
    </>
  );
}

function Section({children}){
  return (
     <section style={{backgroundColor: "#848484"}}>
      {children}
     </section>
  )
}

function App() {
  return (
    <>
      <Section>
        <h1>The Best Platform to write blogs and gets out what inside you</h1>
        <CTA title={"sign up now"} color={"#FF0000"}  />
      </Section>
      <Section>
        <p>
          This is the best platform to straight your idea to million of people
        </p>
      </Section>
      <Section>
        <p>It provides you the best feature rich editors to write blogs</p>
        <CTA title={"get it done"} color={"#0400ff"} para={"THis is how it dones"} />
      </Section>
    </>
  );
}

export default App;
