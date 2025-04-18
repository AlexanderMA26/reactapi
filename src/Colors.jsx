import React from "react";

const Colors=({data})=>{
    return(
        <>
            {
                data && data.map((d) =>{
                    return(
                        //Adding the color cards and coloring the text
                        <div className="card" key={d.id} style={{background:d.color}}>
                        
                        <div className="container">
                        
                            <h4 style={{color: 'rgb(214, 122, 127)'}}><b>{d.name}</b></h4>
                        </div>
                        </div>

                    )

                })
            }
        </>
    )
}
export default Colors;