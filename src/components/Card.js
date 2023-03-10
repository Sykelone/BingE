import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "500px" }}>
                    <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food_400.jpg" className="card-img-top" alt="C:\Users\aksan\OneDrive\Desktop\Binge\binge\src\images\paneerTikka.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is the first card.</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-info rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-info rounded'>
                                <option value="half">Half</option>
                                <option value="Full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
