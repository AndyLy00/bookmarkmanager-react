import {MutableRefObject, useRef, useState} from "react";
import getApi from "../data/data";

export const Create = () => {
    const bookmark_title = useRef() as MutableRefObject<HTMLInputElement>;
    const bookmark_description = useRef() as MutableRefObject<HTMLInputElement>;
    const bookmark_url = useRef() as MutableRefObject<HTMLInputElement>;
    const bookmark_tags = useRef() as MutableRefObject<HTMLInputElement>;

    const [title, setTitle] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tag, setTag] = useState<string>('');

    async function postData() {

        const postData = {
            title: bookmark_title.current.value,
            url: bookmark_url.current.value,
            description: bookmark_description.current.value,
            tag: bookmark_tags.current.value,
        };

        try {
            const res = await getApi.post("/", postData);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className="container">
            <div className="data">
                <div className="first_line">
                    <div className="title_name">
                        <div className="title"> Title</div>
                        <div>
                            <input type="text" className="advanced_input"
                                   onChange={e => setTitle(e.target.value)}
                                   value={title} ref={bookmark_title}/>
                        </div>
                    </div>

                    <div className="description">
                        <div className="title"> Description</div>
                        <div>
                            <input type="text" className="advanced_input"
                                   onChange={e => setDescription(e.target.value)}
                                   value={description} ref={bookmark_description}/>
                        </div>
                    </div>
                </div>

                <div className="second_line second_line2">
                    <div className="advanced_URL">
                        <div className="title">URL</div>
                        <div>
                            <input type="text" className="advanced_input"
                                   onChange={e => setUrl(e.target.value)}
                                   value={url} ref={bookmark_url}/>
                        </div>
                    </div>
                    <div className="advanced_URL">
                        <div className="title">Tags</div>
                        <div>
                            <input type="text" className="advanced_input"
                                   onChange={e => setTag(e.target.value)}
                                   value={tag} ref={bookmark_tags}/>
                        </div>
                    </div>
                </div>

            </div>
            <button className="submit submit2" onClick={postData}>Create</button>
        </div>
            )
}