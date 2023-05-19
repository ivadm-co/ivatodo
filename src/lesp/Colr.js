function initialiseButtionListners() {
    const gren = document.getElementById('gren');
    const reed = document.getElementById('reed');
    const blue = document.getElementById('blue');
  
    gren.addEventListener('click', function onClick(event){
      document.body.style.color = 'green'
    })
  
    reed.addEventListener('click', function onClick(event){
      document.body.style.color = 'red'
    })
  
    blue.addEventListener('click', function onClick(event){
      document.body.style.color = 'blue'
    })
  
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log("page is fully loaded");
    initialiseButtionListners();
  });
  
  
  function Colr() {
    return(
      <>
      <div id="changer">This is a text</div>
      <button id="gren" >  green  </button>
      <button id="reed" >   red   </button>
      <button id="blue" >  blue   </button>
      </>
     );
  }
  
  
  export default Colr;
  