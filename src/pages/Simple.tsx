import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export const Simple = () => {
    const element = <FontAwesomeIcon icon={faCircleInfo}/>

    const data = require('../data/data.json');
    const DisplayData = data.bookmarks.map(
        (bookmark: any) => {
            return (
                <div className="bookmark_element">
                    <div className="bookmark_number"> {bookmark.id} </div>
                    <div className="bookmark_info">
                        <div className="top">

                            <div className="left">
                                <div className="bookmark_name">{bookmark.title}</div>
                            </div>

                            <div className="right">
                                <div className="bookmark_tags">{bookmark.tags}</div>
                                <div className="info_logo">{element}</div>
                            </div>

                        </div>
                        <div className="bottom">
                            <div className="bookmark_URL"> {bookmark.url}</div>
                        </div>
                    </div>
                </div>

            )
        }
    )

    return (
        <>
            <div className="container">
                <div>
                    <input type="text" className="input"/>
                </div>
                <div className="data">{DisplayData}</div>
            </div>
        </>
    )

}