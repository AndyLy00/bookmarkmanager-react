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
    const [newTag, setNewTag] = useState<any[]>([]);
    const element = <FontAwesomeIcon icon={faCircleInfo}/>

    const getData = async () => {
        const {data} = await getApi.get("/");
        setBookmark(data);
    };

    useEffect(() => {
        getData().then();
    }, []);

    async function SearchByTitle() {
        const {data} = await getApi.get("/");
        let initBooks = data;
        const input1 = title;
        let a = initBooks.filter(({"title": t}: any) => t && t.includes(input1));
        setData(a);
    }

    async function SearchByUrl() {
        const {data} = await getApi.get("/");
        let initBooks = data;
        const input2 = url;
        let b = initBooks.filter(({"url": t}: any) => t && t.includes(input2));
        setData(b);
    }

    async function SearchByDescription() {
        const {data} = await getApi.get("/");
        let initBooks = data;
        const input3 = description;
        let c = initBooks.filter(({"description": t}: any) => t && t.includes(input3));
        setData(c);
    }

    async function SearchByTag() {
        const {data} = await getApi.get("/");
        let initBooks = data;
        const input4 = tag;
        let d = initBooks.filter(({"tags": t}: any) => t && t.includes(input4));
        setData(d);
    }

    async function deleteDataById(id: any) {
        await getApi.delete(`/` + id);
        window.location.reload();
    }

    const SpecialInput = newTag.map(
        (newt: any) => {
            return (
                <>
                        <option className="bookmark_tags">{newt}</option>
                </>
            )})

    async function uniqueTag() {
        const {data} = await getApi.get("/");
        let d = data.map((bookmark: { id: number; title: string; tags: Array<string>; url: string;}) => bookmark.tags)
        let dFlat = d.flat();
        let newTagArray = dFlat.filter((c: any, index: any) => {
            return dFlat.indexOf(c) === index;
        });
        setNewTag(newTagArray);
        return newTagArray;
    }


    useEffect(() => {
        console.log(uniqueTag());
    }, []);

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