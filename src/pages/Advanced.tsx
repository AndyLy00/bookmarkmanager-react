import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import getApi from "../data/data";

export const Advanced = () => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');

    const [data, setData] = useState<any[]>([]);
    const [bookmarks, setBookmark] = useState<any>([]);
    const element = <FontAwesomeIcon icon={faCircleInfo}/>

    const getData = async () => {
        const {data} = await getApi.get("/");
        setBookmark(data);
    };

    useEffect(() => {
        getData().then();
    }, []);

    async function SearchByTitle() {
        const input1 = title;

        if (input1) {
            try {
                const res = await getApi.get(`?title=${input1}`);
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }

    async function SearchByUrl() {
        const input2 = url;

        if (input2) {
            try {
                const res = await getApi.get(`?url=${input2}`);
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }

    async function SearchByDescription() {
        const input3 = description;

        if (input3) {
            try {
                const res = await getApi.get(`?description=${input3}`);
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }

    async function SearchByTag() {
        const input4 = tag;

        if (input4) {
            try {

                // @ts-ignore
                const res = bookmarks.filter(({ ["tags"]: tag }) => tag && tag.includes(input4));
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }

    useEffect(() => {
        // @ts-ignore
        const res = bookmarks.filter(({ ["tags"]: tag }) => tag && tag.includes("#web"));
        console.log(res);
    }, []);

    async function deleteDataById(id: any) {
        await getApi.delete(`/` + id);
        window.location.reload();
    }

    const SpecialInput = bookmarks.map(
        (bookmark: { id: number; title: string; tags: Array<string>; url: string;}) => {
            return (
                <>
                {bookmark.tags.map((tag: string) => (
                        <option className="bookmark_tags">{tag}</option>
                    ))}
                </>
            )})


    return (
        <>
        <div className="container">
            <div className="data" style={{paddingBottom: "60px"}}>
                <div className="description_data">Enter your search criteria</div>
                <div className="first_line">
                    <div className="title_name">
                        <div className="title"> Title</div>
                        <div>
                            <input type="text" className="advanced_input" value={title} onChange={e => setTitle(e.target.value)}/>
                        </div>
                    </div>

                    <div className="description">
                        <div className="title"> Description</div>
                        <div>
                            <input type="text" className="advanced_input" value={description} onChange={e => setDescription(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className="second_line">
                    <div className="advanced_URL">
                        <div className="title">URL</div>
                        <div>
                            <input type="text" className="advanced_input" value={url} onChange={e => setUrl(e.target.value)}/>
                        </div>
                    </div>

                    <div className="advanced_tags">
                        <div className="title">Tag</div>
                        <div>
                            <select className="advanced_input" value={tag} onChange={e => setTag(e.target.value)}>
                                <option className="bookmark_tags"></option>
                                {SpecialInput}
                            </select>
                        </div>
                    </div>

                </div>
                <button className="submit" onClick={() => {
                SearchByTitle().then()
                SearchByDescription().then()
                SearchByUrl().then()
                SearchByTag().then()}
                }>Submit</button>
            </div>

            <div className="data" style={{marginTop: "30px"}}>
                {data.map(item => {
                    return (
                        <div className="bookmark_element" key={item.id}>
                            <div className="bookmark_info">
                                <div className="top">

                                    <div className="left">
                                        <div className="bookmark_name">{item.title}</div>
                                    </div>

                                    <div className="right">
                                        {item.tags.map((tag: string) => (
                                            <div className="bookmark_tags">{tag}</div>
                                        ))}
                                        <div className="info_logo">{element}</div>
                                    </div>

                                </div>
                                <div className="bottom">
                                    <a className="bookmark_URL" href={item.url}> {item.url}</a>
                                </div>
                            </div>
                            <button className="delete_button" onClick={deleteDataById.bind(this, item.id)}>X</button>
                        </div>
                    )
                })}
            </div>

            <div className="space"></div>
        </div>

        </>
    )
}