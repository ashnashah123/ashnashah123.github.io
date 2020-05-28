import React from "react";
import AboutModals from "./aboutCategoryModals";

class JeopardyComponent extends React.Component {

two_hundred = "$200"
four_hundred = "$400"
six_hundred = "$600"
eight_hundred = "$800"
one_thousand = "$1000"

category_nums = [0,1,2,3,4,5]
category_names = ["Early Life", "Experiences", "Hobbies", "Fast Facts", "Skills", "Favorites"]

render() {
    return (
        <div>
            <h2 class="text-center">Answer: Who is Ashna Shah?</h2>
            <div class="row">
                {this.category_nums.map(cat_num => 
                        
                            <div class="card col-2" style={{width: '12rem', height: '8rem', backgroundColor: "#0018a8", borderStyle: 'rounded', borderWidth: 'thick'}}>
                                <div class="card-body">
                                    
                                    <h5 class="card-text" style={{color: "#FFFFFF", textAlign: 'center', verticalAlign: 'center', fontSize: "25px"}}>{this.category_names[cat_num]}</h5>
                                </div>
                            </div>
                    )
                }
            </div>
            <div class="row">
                {this.category_nums.map(cat_num =>
                            <div class="card col-2" style={{width: '12rem', height: '8rem', backgroundColor: "#0018a8", borderStyle: 'rounded', borderWidth: 'thick'}}>
                                <div class="card-body">
                                    <AboutModals key={cat_num}
                                        points={this.two_hundred}
                                        category_num={cat_num}
                                    />
                                </div>
                            </div>
                    )
                }
            </div>



            <div class="row">
                {this.category_nums.map(cat_num => 
                        
                            <div class="card col-2" style={{width: '12rem', height: '8rem', backgroundColor: "#0018a8", color: "#FFCC00", textAlign: 'center', fontSize: 'large', borderStyle: 'rounded', borderWidth: 'thick'}}>
                                <div class="card-body">
                                    
                                    <h5 class="card-title">{this.four_hundred}</h5>
                                </div>
                            </div>
                    )
                }
            </div>
            <div class="row">
                {this.category_nums.map(cat_num => 
                        
                            <div class="card col-2" style={{width: '12rem', height: '8rem', backgroundColor: "#0018a8", color: "#FFCC00", textAlign: 'center', fontSize: 'large', borderStyle: 'rounded', borderWidth: 'thick'}}>
                                <div class="card-body">
                                    
                                    <h5 class="card-title">{this.six_hundred}</h5>
                                </div>
                            </div>
                    )
                }
            </div>
            <div class="row">
                {this.category_nums.map(cat_num => 
                        
                            <div class="card col-2" style={{width: '12rem', height: '8rem', backgroundColor: "#0018a8", color: "#FFCC00", textAlign: 'center', fontSize: 'large', borderStyle: 'rounded', borderWidth: 'thick'}}>
                                <div class="card-body">
                                    
                                    <h5 class="card-title">{this.eight_hundred}</h5>
                                </div>
                            </div>
                    )
                }
            </div>
            <div class="row">
                {this.category_nums.map(cat_num => 
                        
                            <div class="card col-2" style={{width: '12rem', height: '8rem', backgroundColor: "#0018a8", color: "#FFCC00", textAlign: 'center', fontSize: 'large', borderStyle: 'rounded', borderWidth: 'thick'}}>
                                <div class="card-body">
                                    
                                    <h5 class="card-title">{this.one_thousand}</h5>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    )
}
}

export default JeopardyComponent