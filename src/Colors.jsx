import React from "react";

const Colors=()=>{
    return(
        <>
            {
                data && data.map((d) =>{
                    return(
                        <div className="card" key={d.id} style={{background:d.color}}>

                        <div className="container">
                            <h4><b>{d.name}</b></h4>
                        </div>
                        </div>

                    )

                })
            }
        </>
    )
}
export default Colors;