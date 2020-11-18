import React from 'react';


const Charactergrid = ({items})=>{



return (

<div className="char">
{
    items.map((item) =>{
      return  (
      <section className="images">
<h1>{item.name}</h1> 
        <img src={item.img} width="200px" height="200px"></img>
      </section>
      )
    })
}
</div>


)




}

export default Charactergrid
