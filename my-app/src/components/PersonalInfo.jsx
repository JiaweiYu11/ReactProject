import React from "react";
import keyboard from '../image/keyboard.jpg';

function PersonalInfo(props) {
    return (
        <div class="container m-3">
            <div class="row">
                <div class="col-3">
                    <img alt='keyboard' src={keyboard} width="100" height="100" />
                </div>
                <div class="col-9">
                    <p>Jim Bob is a dynamic developer, a lifelong learner and an experienced public cloud developer. He can bring skills to your team to mentor others.
                        Lead other team members to develop their skills. culpa voluptatibus quasi sunt facere, dolorem aspernatur impedit voluptates</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo;