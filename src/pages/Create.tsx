
export const Create = () => {
    return(
        <div className="container">
            <div className="data">
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

                <div className="second_line second_line2">
                    <div className="advanced_URL">
                        <div className="title">URL</div>
                        <div>
                            <input type="text" className="advanced_input"/>
                        </div>
                    </div>
                    <div className="advanced_URL">
                        <div className="title">Tags</div>
                        <div>
                            <input type="text" className="advanced_input"/>
                        </div>
                    </div>
                </div>

            </div>
            <button className="submit submit2">Create</button>
        </div>
            )
}