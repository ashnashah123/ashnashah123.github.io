import React from "react";



class AboutModals extends React.Component {

    state = {
        questions: ["graduated northeastern", "bachelors in CS", "most comfortable with full stack but likes exploring different areas of CS", "enjoys meeting people", "test", "another test"]
    }

    render() {
        return (
            <div>
                <a href="" data-toggle="modal" data-target="#exampleModalCenter">
                    <h5 class="card-title" style={{color: "#FFCC00", textAlign: 'center', verticalAlign: 'center', fontSize: "50px"}}>{this.props.points}</h5>
                </a>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {this.props.category_num}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )}}

export default AboutModals 