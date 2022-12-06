import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";


export const Advanced = () => {
    const element = <FontAwesomeIcon icon={faCircleArrowDown}/>

    return (
        <div className="container">
            <div className="data">
                <div className="description_data">Enter your search criteria</div>
                <div className="first_line">
                    <div className="title_name">
                        <div className="title"> Title</div>
                        <div>
                            <input type="text" className="advanced_input"/>
                        </div>
                    </div>

                    <div className="description">
                        <div className="title"> Description</div>
                        <div>
                            <input type="text" className="advanced_input"/>
                        </div>
                    </div>
                </div>

                <div className="second_line">
                    <div className="advanced_URL">
                        <div className="title">URL</div>
                        <div>
                            <input type="text" className="advanced_input"/>
                        </div>
                    </div>

                    <div className="period">
                        <div className="title"> Period when created</div>
                        <div>
                            <div>
                                <input type="date" lang="en" className="advanced_input advanced_input_date"/>
                            </div>
                            <i> </i>
                        </div>
                    </div>
                </div>

                <div className="third_line">
                    <div className="title"> Tags</div>
                    <div className="type_of_border">
                        <div className="tags_title"> Filter tags</div>
                        <div className="checkbox">
                            <div className="checkbox_tag"><input type="checkbox" className="chose"></input>
                                <div className="chose_name">#Tag1</div>
                            </div>
                            <div className="checkbox_tag"><input type="checkbox" className="chose"></input>
                                <div className="chose_name">#Tag2</div>
                            </div>
                            <div className="checkbox_tag"><input type="checkbox" className="chose"></input>
                                <div className="chose_name">#Tag3</div>
                            </div>
                            <div className="checkbox_tag"><input type="checkbox" className="chose"></input>
                                <div className="chose_name">#Tag4</div>
                            </div>
                            <div className="checkbox_tag"><input type="checkbox" className="chose"></input>
                                <div className="chose_name">#Tag5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="data data2">
                <div className="description_data">Select how to view search results</div>
                <div className="first_line first_line_2">
                    <div>
                        <div className="title"> Sort by</div>
                        <div className="type_of_border combobox_display">
                            <div className="combobox">ComboBox</div>
                            <div className="arrow">{element}</div>
                        </div>
                        <div className="type_of_border">
                            <div className="sort_types">Title</div>
                            <div className="sort_types">Description</div>
                            <div className="sort_types">URL</div>
                            <div className="sort_types">Date creating</div>
                            <div className="sort_types">Date last viewed</div>
                        </div>
                    </div>

                    <div>
                        <div className="title"> Sort order</div>
                        <div>
                            <div className="radio_name"><input type="radio" name="radio" className="radio"></input>Ascending
                            </div>
                            <div className="radio_name"><input type="radio" name="radio" className="radio"></input>Descending
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="submit">Submit</button>
            <div className="space"></div>
        </div>
    )
}